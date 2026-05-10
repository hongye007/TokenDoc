---
title: "创建视频"
source: "https://docs.newapi.pro/zh/docs/api/ai-model/videos/sora/createvideo"
syncedAt: "2026-05-10T11:16:43.991Z"
---

AI 模型接口

视频（Videos）

Sora格式

## 创建视频

OpenAI 兼容的视频生成接口。

参考文档: [https://platform.openai.com/docs/api-reference/videos/create](https://platform.openai.com/docs/api-reference/videos/create)

POST

`/v1/videos`

BearerAuth

AuthorizationBearer `<token>`

## [Request Body](#request-body)

multipart/form-data

model?string

模型/风格 ID

prompt?string

文本描述提示词

image?string

图片输入 (URL 或 Base64)

duration?number

视频时长（秒）

width?integer

视频宽度

height?integer

视频高度

fps?integer

视频帧率

seed?integer

随机种子

n?integer

生成视频数量

response\_format?string

响应格式

user?string

用户标识

metadata?

扩展参数 (如 negative\_prompt, style, quality\_level 等)

## [Response Body](#response-body)

```
curl -X POST "https://loading/v1/videos"
```

这篇文档对您有帮助吗？

最后更新于

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/ai-model/videos/sora/createvideo)（New API）。本站为离线整理副本，如有出入以官方为准。
