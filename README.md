# TokenDoc

基于 [VitePress](https://vitepress.dev/) 的本地文档站：从 [New API 官方文档](https://docs.newapi.pro/zh/docs)（默认中文版）同步 **用户功能指引** 与 **API 参考**，并按目录落盘为 Markdown。

## 命令

| 命令 | 说明 |
|------|------|
| `npm run docs:sync` | 抓取官方页面并写入 `docs-site/settings/`、`docs-site/api/` |
| `npm run docs:patch` | 对已有 Markdown 做路径反引号与 `<占位符>` 转义（构建失败时可再执行） |
| `npm run docs:dev` | 本地预览 |
| `npm run docs:build` | 静态构建，输出 `docs-site/.vitepress/dist` |

环境变量：`MAX_API_PAGES`（默认 `200`）限制 API 区 BFS 页数；`SKIP_API_SYNC=1` 时只同步 `settings/`（不爬 API）；**`DOCS_LOCALE`** 默认 `zh`（抓取 `/zh/docs/...` 中文版），英文镜像：`DOCS_LOCALE=en npm run docs:sync`。

## 目录约定

- `docs-site/settings/`：侧栏 **「用户指南」** 对应官方中文版 `/zh/docs/guide/feature-guide/user/...`（由 `docs:sync` 写入）：[登陆注册](https://docs.newapi.pro/zh/docs/guide/feature-guide/user/auth)、[个人设置](https://docs.newapi.pro/zh/docs/guide/feature-guide/user/personal-setting)、[令牌管理](https://docs.newapi.pro/zh/docs/guide/feature-guide/user/token)、[模型广场](https://docs.newapi.pro/zh/docs/guide/feature-guide/user/pricing)、[使用日志](https://docs.newapi.pro/zh/docs/guide/feature-guide/user/log)、[钱包管理](https://docs.newapi.pro/zh/docs/guide/feature-guide/user/topup)、[任务日志](https://docs.newapi.pro/zh/docs/guide/feature-guide/user/task)。（`settings/index.md` 为功能指引总览，侧栏不展示，仍可通过 `/settings/` 直接访问。）
- `docs-site/api/`：从 `/en/docs/api` 起爬取链接（侧栏「API参考」）。
- `docs-site/faq.md`：自有常见问题占位。

## 合规说明

内容著作权归官方所有；同步仅供学习与内网部署参考，请遵守官方条款与 robots / 合理使用原则。
