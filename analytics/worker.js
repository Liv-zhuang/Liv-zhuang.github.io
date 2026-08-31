// Cloudflare Worker (service worker): 网站访问统计采集 + 查询接口
// KV 绑定 env: KV (kv_namespace)，面板口令: ADMIN_TOKEN (plain_text)

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
}

const LOG_TTL = 60 * 60 * 24 * 90 // 90 天
const UV_TTL = 60 * 60 * 24 * 4 // 4 天

function sha(input) {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return (h >>> 0).toString(16)
}

function channelOf(referrer) {
  const r = (referrer || '').toLowerCase()
  if (!r) return 'direct'
  if (r.includes('google')) return 'google'
  if (r.includes('bing')) return 'bing'
  if (r.includes('baidu')) return 'baidu'
  if (r.includes('linkedin')) return 'linkedin'
  if (r.includes('weixin')) return 'wechat'
  if (r.includes('wechat')) return 'wechat'
  if (r.includes('douyin') || r.includes('tiktok')) return 'douyin'
  if (r.includes('xiaohongshu')) return 'xiaohongshu'
  if (r.includes('zhihu')) return 'zhihu'
  if (r.includes('juejin')) return 'juejin'
  if (r.includes('github')) return 'github'
  return 'external'
}

async function handleHit(request, env) {
  const ip = request.headers.get('cf-connecting-ip') || ''
  const country = request.headers.get('cf-ipcountry') || ''
  const ua = (request.headers.get('user-agent') || '').slice(0, 200)
  const acceptLang = (request.headers.get('accept-language') || '').slice(0, 60)

  let body = {}
  try {
    const raw = await request.text()
    if (raw) body = JSON.parse(raw)
  } catch (e) {
    /* ignore */
  }
  const referrer = (body.referrer || '').slice(0, 500)

  const ts = Date.now()
  const day = new Date(ts).toISOString().slice(0, 10)

  const meta = { ip, country, ua, referrer, acceptLang, ts, page: (body.page || '').slice(0, 120) }

  try {
    await env.KV.put(`log:${day}:${ts}:${Math.random().toString(36).slice(2, 10)}`, '', {
      metadata: meta,
      expirationTtl: LOG_TTL,
    })
    if (ip) {
      await env.KV.put(`uv:${day}:${sha(ip)}`, '1', { expirationTtl: UV_TTL })
    }
  } catch (e) {
    /* KV 异常不影响页面 */
  }

  return new Response('ok', { headers: CORS })
}

async function handleStats(request, env) {
  const expected = env.ADMIN_TOKEN || ''
  let given = ''
  try {
    const u = new URL(request.url)
    given = u.searchParams.get('token') || request.headers.get('x-token') || ''
  } catch (e) {
    /* ignore */
  }
  if (!expected || given !== expected) {
    return new Response('unauthorized', { status: 401, headers: CORS })
  }

  const logs = []
  let cursor = undefined
  try {
    do {
      const page = await env.KV.list({ prefix: 'log:', limit: 1000, cursor })
      logs.push(...page.keys.map((k) => k.metadata))
      cursor = page.list_complete ? undefined : page.cursor
    } while (cursor)
  } catch (e) {
    /* KV 未绑定等情况，返回空数据 */
  }

  const today = new Date().toISOString().slice(0, 10)
  const pv = logs.length
  let pvToday = 0
  let uvToday = 0
  const byChannel = {}
  const byCountry = {}
  const byDay = {}
  const todayIps = new Set()

  for (const l of logs) {
    if (!l || !l.ts) continue
    const d = new Date(l.ts).toISOString().slice(0, 10)
    byDay[d] = (byDay[d] || 0) + 1
    if (d === today) {
      pvToday += 1
      if (l.ip) todayIps.add(l.ip)
    }
    byChannel[channelOf(l.referrer)] = (byChannel[channelOf(l.referrer)] || 0) + 1
    const c = l.country || 'Unknown'
    byCountry[c] = (byCountry[c] || 0) + 1
  }
  uvToday = todayIps.size

  const recent = logs
    .slice()
    .sort((a, b) => (b.ts || 0) - (a.ts || 0))
    .slice(0, 50)
    .map((l) => ({ ts: l.ts, ip: l.ip, country: l.country, ua: l.ua, referrer: l.referrer, page: l.page }))

  return new Response(JSON.stringify({ pv, pvToday, uvToday, byDay, byChannel, byCountry, recent }), {
    headers: { ...CORS, 'Content-Type': 'application/json' },
  })
}

async function handleRequest(request) {
  const env = { KV: KV, ADMIN_TOKEN: ADMIN_TOKEN }
  const url = new URL(request.url)
  if (request.method === 'OPTIONS') return new Response(null, { headers: CORS })

  if (url.pathname === '/hit' && request.method === 'POST') {
    return handleHit(request, env)
  }
  if (url.pathname === '/api/stats' && request.method === 'GET') {
    return handleStats(request, env)
  }
  return new Response('not found', { status: 404 })
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
