# TokenDoc

TokenDoc 是基于 VitePress 的多品牌静态文档站。每个品牌使用一份最小 JSON 配置，构建后发布到独立的 `gh-pages-<brand>` 分支。

## 开发

```bash
npm ci
npm run docs:dev
```

常用命令：

| 命令 | 说明 |
| --- | --- |
| `npm run docs:dev` | 本地预览，默认品牌为 `atomflow` |
| `npm run docs:build` | 构建默认品牌 |
| `DOC_BRAND=<brand> npm run docs:build` | 构建指定品牌 |
| `npm run docs:preview` | 预览已构建产物 |
| `npm run docs:patch` | 修复 Markdown 中可能导致构建报错的占位符写法 |

## 品牌配置

配置目录：

```text
docs-site/.vitepress/config/brands/
```

核心文件：

| 文件 | 说明 |
| --- | --- |
| `index.json` | 品牌 ID 列表与默认品牌 |
| `shared.json` | 所有品牌共用默认值 |
| `<brand>.json` | 单个品牌配置 |

单品牌最小配置：

```json
{
  "id": "example",
  "nameZh": "示例品牌",
  "nameEn": "Example",
  "mainSiteUrl": "https://example.com",
  "logo": "https://example.com/logo.png",
  "email": "support@example.com"
}
```

可选字段：

```json
{
  "qqGroup": "QQ群号",
  "qqGroupUrl": "QQ群链接"
}
```

如果品牌配置不填写 QQ 字段，页面会使用 `shared.json` 中的默认 QQ 配置。

新增品牌只需要：

1. 在 `index.json` 的 `brands` 中加入品牌 ID。
2. 新增 `docs-site/.vitepress/config/brands/<brand>.json`。
3. 构建或触发 GitHub Actions。

## 构建产物

不同品牌的产物互不覆盖：

```text
docs-site/.vitepress/dist-<brand>/
```

部署时将对应目录作为文档站根目录即可。

## GitHub Actions

工作流文件：

```text
.github/workflows/gh-pages.yml
```

发布规则：

| 场景 | 行为 |
| --- | --- |
| 手动触发，`brand=all` | 构建全部品牌 |
| 手动触发，`brand=<brand>` | 只构建指定品牌 |
| 只修改某个品牌 JSON | 只构建该品牌 |
| 修改 `shared.json`、正文、主题、脚本、依赖或 workflow | 构建全部品牌 |

发布分支：

```text
gh-pages-<brand>
```

服务器侧只需要拉取对应品牌分支到 `doc.<主域名>` 的站点目录。

## 扩站系统接入

扩站系统建议按以下链路调用：

1. 根据站点信息生成 `<brand>.json`。
2. 更新 `index.json`。
3. 提交到 TokenDoc 源分支。
4. 触发 GitHub Actions 构建指定品牌。
5. 等待 workflow 成功。
6. 目标服务器拉取 `gh-pages-<brand>`。
7. Nginx 将 `doc.<主域名>` 指向该静态目录。

约定域名：

```text
https://api.<主域名>    API 网关
https://doc.<主域名>    文档站
```

## 注意

- 不要把密钥、Token、私有链接或真实客服群邀请链接写入 README。
- 私有信息应放在运行环境变量、仓库 Secrets 或部署系统的加密配置中。
- 品牌差异尽量限制在 `<brand>.json`，避免为单个站点修改主题代码。
