import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  zh: {
    translation: {
      nav: {
        skills: '专注领域',
        track: '成功案例',
        contact: '联系方式',
      },
      hero: {
        greeting: '你好，我是',
        name: 'Liv Zhuang',
        researchTitle: '实习与工作经历',
        educationTitle: '教育经历',
        research: [
          { title: '睿联技术（Reolink）', sub: '校招+社招，覆盖技术研发职能', years: '2024.07 — 2025.02', href: 'https://reolink.com/', logo: '/logos/reolink.png', linkText: 'Reolink' },
          { title: '顺丰速运', sub: '校招+社招+人才培养（校招生+实习生）', years: '2025.04 — 2026.02', logo: '/logos/sf.ico' },
          { title: '猎头', sub: '大模型 & 具身智能', years: '2026.02 — 至今' },
        ],
        education: [{ course: '人力资源管理 本科', institution: '韶关学院', year: '2021 — 2025', logo: '/logos/sgu.png' }],
        taglineLabel: '风格：',
        tagline:
          '有话直说，优劣势讲清楚；timing不对，保持联系；信息严格保密。',
      },
      skills: {
        title: '专注领域',
        llm: {
          label: '大模型',
          items: [
            '预训练（模型架构、数据合成、数据配比）',
            '后训练（强化学习、微调、SFT）',
            '多模态理解与生成（VLM、MLLM）',
            'Agent（coding agent、computer-use agent、search agent）',
          ],
        },
        embodied: {
          label: '具身智能',
          items: [
            '具身基模（VLA / WM / WAM）预训练 & 后训练',
            '运控 + 强化学习',
            '仿真算法（Sim-to-Real）',
          ],
        },
        companies: {
          items: [
            { label: '中大厂', value: '腾讯 / 字节 / 阿里 / 美团 / 快手 / 小红书 / 京东' },
            { label: '明星大模型初创', value: 'DeepSeek / 智谱 / Kimi / 阶跃 / MiniMax' },
            { label: '具身初创', value: '自变量 / 智元 / 千寻 / 银河 / 星海图 / 苏度 / 极佳 / 流形 / 星动纪元' },
            { label: '未 PR 企业', value: '···' },
          ],
        },
      },
      track: {
        title: '成功案例',
        cases: [
          {
            label: 'Case A',
            path: '大厂AIGC核心人员→具身WM',
            hidden: true,
            base: '+33%',
            cash: '+33%',
            total: '+100%',
            desc: '诉求：要资源做自己想做的事情（机器人）。结合方向判断与团队密度，匹配到最合适的具身初创。',
          },
          {
            label: 'Case B',
            path: '大厂AIGC核心人员→具身WM',
            hidden: true,
            base: '+146%',
            cash: '+10%',
            total: '+108%',
            desc: '诉求：赛道更换，入局新赛道，增加可能性。充分了解风险后主动决策，过程透明无信息差。',
          },
        ],
        baseLabel: 'Base 涨幅',
        cashLabel: '现金涨幅',
        totalLabel: '总包涨幅',
      },
      contact: {
        title: '联系方式',
        subtitle: '如果你在做有意思的事，或者只是想聊聊方向和外面机会，欢迎联系。',
        email: 'zhuang9729@gmail.com',
        emailLabel: '邮箱',
        wechat: '19874502075',
        wechatLabel: '微信',
        copyHint: '点击复制',
        copied: '已复制 ✓',
      },
      footer: {
        text: '©',
      },
    },
  },
  en: {
    translation: {
      nav: {
        skills: 'Focus Areas',
        track: 'Track Record',
        contact: 'Contact',
      },
      hero: {
        greeting: "Hi, I'm",
        name: 'Liv Zhuang',
        researchTitle: 'Internships & Work',
        educationTitle: 'Education',
        research: [
          { title: 'Reolink', sub: 'Campus + social recruiting, tech R&D roles', years: '2024.07 — 2025.02', href: 'https://reolink.com/', logo: '/logos/reolink.png', linkText: 'Reolink' },
          { title: 'SF Express', sub: 'Campus + social recruiting & talent programs', years: '2025.04 — 2026.02', logo: '/logos/sf.ico' },
          { title: 'Headhunter', sub: 'LLM & Embodied AI', years: '2026.04 — Present' },
        ],
        education: [{ course: 'B.A. Human Resource Management', institution: 'Shaoguan University', year: '2021 — 2025', logo: '/logos/sgu.png' }],
        taglineLabel: 'Style: ',
        tagline:
          "Speak straight — be clear about pros and cons; stay in touch when timing is off; information strictly confidential.",
      },
      skills: {
        title: 'Focus Areas',
        llm: {
          label: 'Large Language Models',
          items: [
            'Pre-training (architecture, data synthesis, data ratio)',
            'Post-training (RL, fine-tuning, SFT)',
            'Multimodal understanding & generation (VLM, MLLM)',
            'Agents (coding agent, computer-use agent, search agent)',
          ],
        },
        embodied: {
          label: 'Embodied AI',
          items: [
            'Foundation models (VLA / WM / WAM) — pre-training & post-training',
            'Motion control + Reinforcement Learning',
            'Simulation algorithms (Sim-to-Real)',
          ],
        },
        companies: {
          items: [
            { label: 'Large tech', value: 'Tencent / ByteDance / Alibaba / Meituan / Kuaishou / Xiaohongshu / JD' },
            { label: 'Top LLM startups', value: 'DeepSeek / Zhipu / Kimi / StepFun / MiniMax' },
            { label: 'Embodied startups', value: 'Zibian / Zhiyuan / Qianxun / Yinhe / Xinghaitu / Sudu / Jijia / Liuxing / Xingdong' },
            { label: 'Stealth', value: 'companies···' },
          ],
        },
      },
      track: {
        title: 'Track Record',
        cases: [
          {
            label: 'Case A',
            path: 'Big-tech AIGC core → Embodied WM',
            hidden: true,
            base: '+33%',
            cash: '+33%',
            total: '+100%',
            desc: 'Goal: resources to work on robotics. Matched to the right embodied AI startup based on direction conviction and team density.',
          },
          {
            label: 'Case B',
            path: 'Big-tech AIGC core → Embodied WM',
            hidden: true,
            base: '+146%',
            cash: '+10%',
            total: '+108%',
            desc: 'Goal: switch tracks, enter a new space, expand possibilities. Made a fully informed decision — no pressure, no information gaps.',
          },
        ],
        baseLabel: 'Base increase',
        cashLabel: 'Cash increase',
        totalLabel: 'Total comp increase',
      },
      contact: {
        title: 'Contact',
        subtitle: "If you're working on something interesting, or just want to talk about opportunities — feel free to reach out.",
        email: 'zhuang9729@gmail.com',
        emailLabel: 'Email',
        wechat: '19874502075',
        wechatLabel: 'WeChat',
        copyHint: 'Click to copy',
        copied: 'Copied ✓',
      },
      footer: {
        text: '©',
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh',
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
