# Liv Zhuang 个人主页

个人主页源码仓库，部署在 [https://liv-zhuang.github.io/](https://liv-zhuang.github.io/)。

复刻 Terminal 风格（参考 siriyep.github.io 的设计语言）：自定义字体（Inter / Noto Sans SC / JetBrains Mono）+ Nord 配色 + 明暗双主题 + 终端风 Hero。

## 技术栈

- [Vite](https://vitejs.dev/) + React 18
- [Chakra UI](https://chakra-ui.com/)（^2.8）
- [i18next](https://www.i18next.com/) + react-i18next（中/英切换）
- framer-motion（首页打字机/渐变动画）、react-icons
- 字体包：`@fontsource-variable/inter`、`@fontsource-variable/jetbrains-mono`、`@fontsource/noto-sans-sc`

## 目录结构

```
├── .github/workflows/deploy.yml   # GitHub Actions 自动构建部署
├── public/                        # 静态资源（会原样发布到网站根目录）
│   ├── avatar.jpg                 # 头像
│   ├── favicon.svg                # 浏览器标签页图标
│   ├── icons.svg
│   ├── logos/                     # 机构 logo（reolink.png / sf.ico / sgu.png）
│   └── cv/                        # 简历目录（上传 resume.pdf 后生效）
└── src/
    ├── main.jsx                   # 入口（字体/CSS/i18n 引入）
    ├── App.jsx                    # 页面组装
    ├── theme.js                   # Chakra 主题（Nord 色板 + 语义 token）
    ├── index.css                  # CSS 变量与基础样式
    ├── i18n.js                    # 【重点】全部文案内容（zh / en 两段）
    └── components/                # Navbar / Hero / Skills / Track / Contact / Footer 等
```

## 本地开发

需要 Node.js 18+：

```bash
npm install     # 安装依赖
npm run dev     # 本地开发（http://localhost:5173）
npm run build   # 构建生产产物到 dist/
npm run preview # 预览构建产物
```

## 怎么改内容（只需改 i18n.js）

所有文字都在 `src/i18n.js`，分 `zh`（中文）与 `en`（英文）两段，**两处都要改**：

| 内容 | 字段 |
|---|---|
| 名字 / 打招呼 / 轮播 | `hero.greeting / hero.name` |
| 实习与工作经历 | `hero.research[].title / sub / years / href / logo` |
| 教育经历 | `hero.education[]` |
| 一句话风格自述 | `hero.taglineLabel / hero.tagline` |
| 专注领域 | `skills.llm / skills.embodied / skills.companies` |
| 成功案例 | `track.cases[]`（`hidden: true` 可隐藏单个，全隐藏则整节消失） |
| 联系方式 | `contact.*` |

图表/文案想在界面上看效果，`npm run dev` 即时热更新。

## 换图片

| 用途 | 路径 | 说明 |
|---|---|---|
| 头像 | `public/avatar.jpg` | 建议 ≥400×400 |
| 图标 | `public/favicon.svg` | 48×48 SVG |
| 机构 logo | `public/logos/` | 透明底 PNG，≤256px |
| 简历 | `public/cv/resume.pdf` | 文件名必须 `resume.pdf` |

同名覆盖即可，无需改代码；新增 logo 需在 `i18n.js` 对应条目加 `logo: '/logos/xxx.png'`。

## 部署

### 自动部署（默认）
push 源码到 `main` 分支，GitHub Actions 自动：`npm ci → npm run build → 部署到 gh-pages`，随后由 GitHub Pages 重建上线（通常 1~2 分钟）。

### 手动部署（Actions 故障时）
```bash
git fetch origin
git worktree add --detach .tmp-gh origin/gh-pages
npm run build
cp -r dist/* .tmp-gh/
echo "deploy: $(git rev-parse --short main)" >> .tmp-gh
git -C .tmp-gh add -A
git -C .tmp-gh commit -m "deploy: main"
git -C .tmp-gh push origin HEAD:gh-pages --force
git worktree remove .tmp-gh --force
```

## 访客统计

- **网站**：页脚集成 [不蒜子 busuanzi](https://busuanzi.ibruce.info/)（访问量 + 访客数，第三方免费服务）
- **GitHub 主页**：README 顶部的访客徽章（[komarev ghpvc](https://komarev.com/ghpvc/)）

## 常见问题

- **改了没生效**：浏览器缓存 → Ctrl+F5 强刷；GitHub Pages 重建有 1~3 分钟延迟。
- **push 后没自动更新**：`Actions` 页看工作流是否运行。运行器故障时用上面「手动部署」方式兜底。
- **点击 CV 404**：`public/cv/resume.pdf` 还没上传，传上去即生效。
