# TokenDoc

基于 [VitePress](https://vitepress.dev/) 的多品牌静态文档站（默认 **AtomFlow**，可选 **微词元 / minitoken**）。内容包含平台介绍、极速入门、用户指南、OpenAI 兼容 API 说明、常见问题，以及可内嵌的独立页（关于我们、隐私政策、用户协议等）。

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
| `npm run docs:dev` | 本地开发预览（默认 <http://localhost:5173>），未设置 `DOC_BRAND` 时等同 **atomflow** |
| `npm run docs:build` | 生产构建；未设置 `DOC_BRAND` 时输出 **`docs-site/.vitepress/dist-atomflow/`** |
| `npm run docs:build:atomflow` | 显式构建 AtomFlow 品牌 → `dist-atomflow/` |
| `npm run docs:build:minitoken` | 构建微词元品牌 → `dist-minitoken/` |
| `npm run docs:preview` | 预览（需已用**同一** `DOC_BRAND` 构建过；默认预览 atomflow 对应产物） |
| `npm run docs:patch` | 对已有 Markdown 做路径反引号与 `<占位符>` 转义（构建报错时可再执行） |

环境变量 **`DOC_BRAND`**：`atomflow`（默认）或 `minitoken`（列表见 **`config/brands/index.json`**）。品牌数据在 **`docs-site/.vitepress/config/brands/`**：**`shared.json`**（公共默认 QQ、截图、合规模板等）+ **`<id>.json`**（中文名、英文名、主站 URL、Logo、邮箱；可选 `qqGroup` / `qqGroupUrl`；`overrides` 内可覆盖主题、页脚等）。**`brands.ts`** 仅负责加载 JSON 与占位符替换。新增品牌：在 `index.json` 登记 id，新增 `<id>.json`，无需改 TypeScript。

---

## 目录说明

| 路径 | 说明 |
|------|------|
| `docs-site/` | VitePress **文档根**（`config.mts`、主题、Markdown 正文） |
| `docs-site/.vitepress/` | 主题（`theme/`）、`config.mts`、**`config/brands/*.json`**、**`brands.ts`（加载与推导）** |
| `docs-site/settings/` | 用户指南 Markdown |
| `docs-site/api/` | API 参考 Markdown |
| `docs-site/public/` | 静态资源；根路径下独立 HTML（如法律页、关于我们独立导出）会原样复制到 `dist/` |
| `scripts/` | 维护用 Node 脚本（如 `docs:patch`） |

侧栏「API 参考」下分组与 `docs-site/api/ai-model/` 等路径由 **`docs-site/.vitepress/config.mts`** 维护；顶栏 Logo、**「主站入口」（`navPortalOrigin` → `portalUrl` 或 `mainSiteUrl`）**、站点标题、页脚合规文案、**`themeConfig.tdBrand`** 等按 **`DOC_BRAND`** 从 **`brands.ts`** 读取。主题内请求示例（右侧栏 cURL 等）通过 **`__TD_GATEWAY_V1__`**（`apiGatewayUrl` + `/v1`）与 **`__TD_API_GATEWAY_ORIGIN__`**（`apiGatewayUrl` 的 origin）与当前品牌对齐。

---

## 生产部署（静态站）

构建产物目录（**与 `DOC_BRAND` 对应**，互不覆盖）：

```text
docs-site/.vitepress/dist-atomflow/
docs-site/.vitepress/dist-minitoken/
```

将**对应品牌**目录内容部署到目标域名站点根（内含 `index.html`）。例如 AtomFlow 文档子域指向 `dist-atomflow`，微词元指向 `dist-minitoken`。

### GitHub Actions → `gh-pages-<品牌>` 分支（服务器无 Node）

[`.github/workflows/gh-pages.yml`](.github/workflows/gh-pages.yml) 使用 **matrix**：对每个 `DOC_BRAND` 执行 `npm run docs:build`，并把产物推送到：

| 分支 | 品牌 |
|------|------|
| `gh-pages-atomflow` | AtomFlow |
| `gh-pages-minitoken` | 微词元 |

1. 仓库 **Settings → Actions → General**：**Workflow permissions** 选「Read and write permissions」。
2. 推送 **`main`** 后，在 **Actions** 中确认两个 job 均成功，分支列表中出现 **`gh-pages-atomflow`** 与 **`gh-pages-minitoken`**。
3. 服务器分别克隆（示例）：

```bash
git clone -b gh-pages-atomflow --single-branch https://github.com/hongye007/TokenDoc.git /var/www/doc.atomflow.vip
git clone -b gh-pages-minitoken --single-branch https://github.com/hongye007/TokenDoc.git /var/www/doc.minitoken.vip
```

4. 更新：`cd <站点目录> && git pull`。

若仓库为私有，服务器需 [Deploy key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys) 或 HTTPS + [PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)。

---

示例（本机构建后 rsync，指定品牌）：

```bash
npm ci
DOC_BRAND=minitoken npm run docs:build
rsync -a --delete docs-site/.vitepress/dist-minitoken/ /var/www/doc.minitoken.vip/
```

### 两台机器 + Nginx（AtomFlow / 微词元）

两个品牌可以各部署在**独立机器**上：每台只拉自己的 **`gh-pages-<品牌>`**（或 rsync 自己的 `dist-*`），**Nginx 配置结构相同**，一般只需改 **`server_name`、`root`**（以及该机上的 **`ssl_certificate`** 路径，若按域名分证书）。

| 机器 | 文档域名（示例） | `root`（示例） |
|------|------------------|----------------|
| AtomFlow | `doc.atomflow.vip` | `/var/www/doc.atomflow.vip`（`gh-pages-atomflow` 内容） |
| 微词元 | `doc.minitoken.vip` | `/var/www/doc.minitoken.vip`（`gh-pages-minitoken` 内容） |

`location /` 可共用同一逻辑，例如：

```nginx
root /var/www/doc.minitoken.vip;   # 另一台机器改为 atomflow 对应路径
index index.html;
location / {
  try_files $uri $uri.html $uri/ /index.html;
}
```

静态资源缓存、`listen` / HTTPS 等与常规静态站相同；**不要**把一台机器的 `root` 指到另一品牌的产物目录。

---

## 常见问题

- **构建报 Vue 把 `<token>` 等当成组件**：执行 `npm run docs:patch`，或在 `config.mts` 的 `DOC_PLACEHOLDER_TAGS` 中补充标签名。
- **正文修改**：直接在 `docs-site/settings/`、`docs-site/api/` 等目录下编辑对应 Markdown 后重新构建即可。

---

## 许可

仓库内脚本与主题代码：`package.json` 中声明为 **ISC**（若后续增加 `LICENSE` 文件，以文件为准）。
