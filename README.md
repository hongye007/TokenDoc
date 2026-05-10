# TokenDoc

**AtomFlow 文档站** — 基于 [VitePress](https://vitepress.dev/) 的静态文档与 API 参考。内容包含平台介绍、极速入门、用户指南、OpenAI 兼容 API 说明、常见问题，以及可内嵌的独立页（关于我们、隐私政策、用户协议等）。

- 在线文档（部署后）：例如 `https://doc.atomflow.vip`（按你的实际域名）
- 源码仓库：<https://github.com/hongye007/TokenDoc>

---

## 环境要求

- **Node.js** 18+（推荐 20 LTS）
- **npm** 9+

---

## 快速开始

```bash
git clone git@github.com:hongye007/TokenDoc.git
cd TokenDoc
npm ci
```

| 命令 | 说明 |
|------|------|
| `npm run docs:dev` | 本地开发预览（默认 <http://localhost:5173>） |
| `npm run docs:build` | 生产构建，输出 **`docs-site/.vitepress/dist/`** |
| `npm run docs:preview` | 本地预览构建结果 |
| `npm run docs:patch` | 对已有 Markdown 做路径反引号与 `<占位符>` 转义（构建报错时可再执行） |

---

## 目录说明

| 路径 | 说明 |
|------|------|
| `docs-site/` | VitePress **文档根**（`config.mts`、主题、Markdown 正文） |
| `docs-site/.vitepress/` | 主题（`theme/`）、配置 `config.mts` |
| `docs-site/settings/` | 用户指南 Markdown |
| `docs-site/api/` | API 参考 Markdown |
| `docs-site/public/` | 静态资源；根路径下独立 HTML（如法律页、关于我们独立导出）会原样复制到 `dist/` |
| `scripts/` | 维护用 Node 脚本（如 `docs:patch`） |

侧栏「API 参考」下分组与 `docs-site/api/ai-model/` 等路径由 **`docs-site/.vitepress/config.mts`** 维护；顶栏「主站入口」链接为配置项 **`MAIN_SITE_URL`**（请改为你的门户，如 `https://atomflow.vip`）。

---

## 生产部署（静态站）

构建产物目录：

```text
docs-site/.vitepress/dist/
```

将该目录内容部署到任意静态托管（Nginx、Caddy、OSS + CDN、Netlify、Cloudflare Pages 等）。文档子域示例：`doc.atomflow.vip` 的站点根指向 **`dist` 内带 `index.html` 的那一层**，HTTPS 由证书或平台托管即可。

### GitHub Actions → `gh-pages` 分支（服务器无 Node）

仓库已配置 [`.github/workflows/gh-pages.yml`](.github/workflows/gh-pages.yml)：向 **`main`** 推送（或手动 **Run workflow**）时，会在 GitHub 上执行 `npm ci` 与 `npm run docs:build`，并把 **`docs-site/.vitepress/dist/`** 推送到 **`gh-pages`** 分支（与源码 `main` 分离）。

1. 在 GitHub 仓库 **Settings → Actions → General** 中确认 **Workflow permissions** 为「Read and write permissions」（否则无法推送 `gh-pages`）。
2. 将含本 Workflow 的提交推送到 **`main`**，在仓库 **Actions** 中确认 **Publish static site to gh-pages** 已成功（首次成功后才会出现 **`gh-pages`** 分支）。
3. 在服务器站点目录克隆静态分支（根目录即网站根，含 `index.html`）：

```bash
git clone -b gh-pages --single-branch https://github.com/hongye007/TokenDoc.git /var/www/doc.atomflow.vip
```

4. 之后每次推送 `main` 且 Workflow 成功后，在服务器执行：

```bash
cd /var/www/doc.atomflow.vip && git pull
```

若仓库为私有，服务器需配置 [Deploy key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys) 或使用 HTTPS + [fine-grained token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) 拉取。

---

示例（服务器上本地构建并发布）：

```bash
npm ci
npm run docs:build
rsync -a --delete docs-site/.vitepress/dist/ /var/www/doc.atomflow.vip/
```

---

## 常见问题

- **构建报 Vue 把 `<token>` 等当成组件**：执行 `npm run docs:patch`，或在 `config.mts` 的 `DOC_PLACEHOLDER_TAGS` 中补充标签名。
- **正文修改**：直接在 `docs-site/settings/`、`docs-site/api/` 等目录下编辑对应 Markdown 后重新构建即可。

---

## 许可

仓库内脚本与主题代码：`package.json` 中声明为 **ISC**（若后续增加 `LICENSE` 文件，以文件为准）。
