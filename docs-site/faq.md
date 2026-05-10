---
title: 常见问题
---

# 常见问题

此处可放置你们**自有部署**的 FAQ（额度、渠道、错误码、限流等）。官方通用问题仍以 [New API 常见问题](https://docs.newapi.pro/zh/docs/support/faq) 为准。

## 如何更新文档内容？

在项目根目录执行：

```bash
npm run docs:sync
```

然后预览：

```bash
npm run docs:dev
```

## 同步失败或排版不理想？

官方站点为大型前端应用，抓取依赖正文抽取算法。若个别页面失败，可手动在 `docs-site/settings/`、`docs-site/api/` 下补充 Markdown，或调高环境变量 `MAX_API_PAGES` 后重试。
