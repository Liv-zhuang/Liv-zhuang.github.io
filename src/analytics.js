// 访客统计埋点：把页面访问上报到自建统计服务（Cloudflare Worker）
// 部署后把下面地址换成实际 Worker 地址（如 https://stat.xxxx.workers.dev）
const ANALYTICS_ENDPOINT = 'https://ANALYTICS-SERVICE-PLACEHOLDER/hit'

if (ANALYTICS_ENDPOINT && !ANALYTICS_ENDPOINT.includes('PLACEHOLDER')) {
  try {
    const body = JSON.stringify({
      referrer: document.referrer || '',
      page: location.pathname,
    })
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ANALYTICS_ENDPOINT, body)
    } else {
      fetch(ANALYTICS_ENDPOINT, { method: 'POST', body, keepalive: true }).catch(() => {})
    }
  } catch (e) {
    /* ignore */
  }
}
