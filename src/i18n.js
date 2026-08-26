import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  zh: {
    translation: {
      nav: {
        about: '关于我',
        focus: '专注领域',
        experience: '经历',
        track: '成功案例',
        contact: '联系',
      },
      hero: {
        name: 'Liv Zhuang',
        title: '猎头 · 大模型基模 & 具身智能',
        subtitles: [
          '没有完美的地方，只有最合适的地方',
          '换工作是低频高风险决策',
          '好处坏处讲清楚',
          'timing不对就保持联系',
          '候选人信息严格保密',
        ],
      },
      about: {
        title: '关于我',
        p1: '本科毕业于韶关学院人力资源管理专业（2021–2025）。做招聘这件事，从睿联技术（Reolink）的技术社招起步，再到顺丰速运的校招与人才培养，积累了从零建立候选人信任、在高压节奏下完成批量交付的经验。',
        p2: '转向 AI 赛道，是因为大模型和具身智能是少数几个值得长期花时间的方向。大模型改变的是信息处理的底层逻辑；具身让这种能力长出手脚，进入物理世界。',
        p3: '换工作是低频高风险决策。我喜欢有话直说——好处坏处讲清楚，timing 不对就保持联系，候选人信息严格保密。',
      },
      focus: {
        title: '专注算法（具身居多）',
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
          label: '企业对接',
          items: [
            '中大厂：腾讯 / 字节 / 阿里 / 美团 / 快手 / 小红书 / 京东',
            '明星大模型初创：DeepSeek / 智谱 / Kimi / 阶跃 / MiniMax',
            '具身初创：自变量 / 智元 / 千寻 / 银河 / 星海图 / 苏度 / 极佳 / 流形 / 星动纪元',
            '未 PR 企业···',
          ],
        },
      },
      experience: {
        title: '经历',
        items: [
          {
            period: '2021 – 2025',
            title: '人力资源管理 本科',
            org: '韶关学院',
            desc: '系统学习人力资源管理理论与实践，核心课程包括招聘与配置、薪酬管理、劳动关系等。',
            tags: ['人力资源管理', '招聘与配置', '劳动关系'],
          },
          {
            period: '2023 – 2024',
            title: '招聘专员',
            org: '睿联技术（Reolink）',
            desc: '负责技术岗位社会招聘，覆盖硬件、软件、供应链等方向。积累了在智能硬件出海企业中建立候选人信任、跨文化团队协作的实战经验。',
            tags: ['社会招聘', '智能硬件', '出海'],
          },
          {
            period: '2024 – 2025',
            title: '招聘专员',
            org: '顺丰速运',
            desc: '承担校园招聘与人才培养项目，高压节奏下完成批量交付，构建候选人管理体系，推动招募到入职转化的全链路优化。',
            tags: ['校园招聘', '人才培养', '批量交付'],
          },
          {
            period: '2025 – 至今',
            title: '猎头 · 大模型基模 & 具身智能',
            org: '独立',
            desc: '专注大模型与具身智能领域高端人才连接。结合候选人核心诉求推荐合适机会，好处坏处讲清楚，候选人信息严格保密。',
            tags: ['大模型', '具身智能', '高端猎头'],
          },
        ],
      },
      track: {
        title: '成功案例',
        subtitle: '候选人均来自大厂 AIGC 核心团队，落地明星具身初创',
        cases: [
          {
            label: 'Case A',
            cash: '+33%',
            total: '+100%',
            desc: '诉求：要资源做自己想做的事情（机器人）。结合方向判断与团队密度，匹配到最合适的具身初创。',
          },
          {
            label: 'Case B',
            cash: '+60%',
            total: '+150%',
            desc: '诉求：赛道更换，入局新赛道，增加可能性。充分了解风险后主动决策，过程透明无信息差。',
          },
        ],
        cashLabel: '现金涨幅',
        totalLabel: '总包涨幅',
      },
      value: {
        title: '价值点',
        items: [
          { label: '判断力', desc: '结合核心诉求，推荐合适的地方' },
          { label: '信息', desc: '外部变动信息，小道消息（八卦大王 hh）' },
          { label: '网络', desc: '覆盖国内外实验室、大厂核心团队、早期创业公司' },
          { label: '职业素养', desc: '候选人信息严格保密！！！' },
        ],
      },
      contact: {
        title: '联系方式（感谢看到这里 hh）',
        subtitle: '如果你在做有意思的事，或者只是想聊聊方向和外面机会，欢迎联系。',
        email: 'zhuang9729@gmail.com',
        wechat: '19874502075',
        wechatLabel: '微信',
      },
      footer: {
        text: '© 2025 Liv Zhuang',
      },
    },
  },
  en: {
    translation: {
      nav: {
        about: 'About',
        focus: 'Focus Areas',
        experience: 'Experience',
        track: 'Track Record',
        contact: 'Contact',
      },
      hero: {
        name: 'Liv Zhuang',
        title: 'Headhunter · Foundation Models & Embodied AI',
        subtitles: [
          'No perfect place — only the right fit',
          "Job changes are high-stakes, low-frequency decisions",
          'Honest about pros and cons',
          "Stay in touch when timing's off",
          'Candidate info strictly confidential',
        ],
      },
      about: {
        title: 'About Me',
        p1: 'B.A. in Human Resource Management, Shaoguan University (2021–2025). My recruiting career started at Reolink (smart hardware, overseas markets), followed by SF Express handling campus recruiting and talent development programs.',
        p2: 'I moved into AI recruiting because LLMs and Embodied AI are among the few areas worth investing in long-term. LLMs reshape how information is processed; Embodied AI gives that intelligence hands and feet in the physical world.',
        p3: "Job changes are high-stakes, low-frequency decisions. I like to be direct — lay out the pros and cons, stay in touch when timing is off, and keep candidate information strictly confidential.",
      },
      focus: {
        title: 'Focus Areas (Embodied AI heavy)',
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
          label: 'Company Network',
          items: [
            'Large tech: Tencent / ByteDance / Alibaba / Meituan / Kuaishou / Xiaohongshu / JD',
            'Top LLM startups: DeepSeek / Zhipu / Kimi / StepFun / MiniMax',
            'Embodied startups: Zibian / Zhiyuan / Qianxun / Yinhe / Xinghaitu / Sudu / Jijia / Liuxing / Xingdong',
            'Stealth companies···',
          ],
        },
      },
      experience: {
        title: 'Experience',
        items: [
          {
            period: '2021 – 2025',
            title: 'B.A. Human Resource Management',
            org: 'Shaoguan University',
            desc: 'Core coursework in recruitment & staffing, compensation management, and labor relations.',
            tags: ['HRM', 'Recruitment', 'Labor Relations'],
          },
          {
            period: '2023 – 2024',
            title: 'Recruiter',
            org: 'Reolink (睿联技术)',
            desc: 'Social recruiting for technical roles across hardware, software, and supply chain. Built cross-cultural hiring experience at a fast-growing smart hardware company expanding internationally.',
            tags: ['Social Recruiting', 'Smart Hardware', 'Overseas'],
          },
          {
            period: '2024 – 2025',
            title: 'Recruiter',
            org: 'SF Express (顺丰速运)',
            desc: 'Led campus recruiting and talent development programs under high-volume pressure. Built end-to-end candidate management systems to improve offer conversion.',
            tags: ['Campus Recruiting', 'Talent Development', 'High-volume'],
          },
          {
            period: '2025 – Present',
            title: 'Headhunter · Foundation Models & Embodied AI',
            org: 'Independent',
            desc: "Senior talent placement in LLM and Embodied AI. Match based on candidate goals, not just keywords. Honest about every opportunity's pros and cons. Candidate info strictly confidential.",
            tags: ['LLM', 'Embodied AI', 'Executive Search'],
          },
        ],
      },
      track: {
        title: 'Track Record',
        subtitle: 'Candidates from core AIGC teams at top-tier companies, placed at leading embodied AI startups',
        cases: [
          {
            label: 'Case A',
            cash: '+33%',
            total: '+100%',
            desc: 'Goal: resources to work on robotics. Matched to the right embodied AI startup based on direction conviction and team density.',
          },
          {
            label: 'Case B',
            cash: '+60%',
            total: '+150%',
            desc: 'Goal: switch tracks, enter a new space, expand possibilities. Made a fully informed decision — no pressure, no information gaps.',
          },
        ],
        cashLabel: 'Cash increase',
        totalLabel: 'Total comp increase',
      },
      value: {
        title: 'What I Bring',
        items: [
          { label: 'Judgment', desc: 'Match based on what the candidate actually wants' },
          { label: 'Information', desc: 'Market intel, inside scoops (professional gossip hh)' },
          { label: 'Network', desc: 'Labs, big tech core teams, early-stage startups' },
          { label: 'Integrity', desc: 'Candidate info strictly confidential!!!' },
        ],
      },
      contact: {
        title: 'Get in Touch (thanks for scrolling this far hh)',
        subtitle: "If you're working on something interesting, or just want to talk about opportunities — feel free to reach out.",
        email: 'zhuang9729@gmail.com',
        wechat: '19874502075',
        wechatLabel: 'WeChat',
      },
      footer: {
        text: '© 2025 Liv Zhuang',
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
