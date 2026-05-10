---
title: "生成图像"
source: "https://docs.newapi.pro/zh/docs/api/ai-model/images/openai/post-v1-images-generations"
syncedAt: "2026-05-10T11:16:43.138Z"
---

POST

`/v1/images/generations`/

Bearer

AuthorizationBearer `<token>`

In: `header`

## [Request Body](#request-body)

application/json

model?string

用于图像生成的模型。`dall-e-2`、`dall-e-3` 或 `gpt-image-1` 之一。默认为 `dall-e-2`，除非使用特定于 `gpt-image-1` 的参数。

prompt\*string

所需图像的文本描述。`gpt-image-1` 的最大长度为 32000 个字符，`dall-e-2` 的最大长度为 1000 个字符，`dall-e-3` 的最大长度为 4000 个字符。

n?integer

要生成的图像数量。必须介于 1 到 10 之间。对于 `dall-e-3`，仅支持 `n=1`。

size?string

生成的图像的大小。`对于 gpt-image-1`，必须是 `1024x1024`、`1536x1024`（横向）、`1024x1536`（纵向）或`自动`（默认值）之一，`对于 dall-e-2`，必须是 `256x256、``512x512` 或 `1024x1024` 之一，对于 `dall-e-3`，必须是 `1024x1024`、`1792x1024` 或 `1024x1792` 之一。

background?string

moderation?string

控制 `gpt-image-1` 生成的图像的内容审核级别。必须为`低，` 以进行限制较少的筛选或`自动`（默认值）。

quality?string

将生成的图像的质量。

stream?string

style?string

user?string

## [Response Body](#response-body)

```
curl -X POST "https://loading/v1/images/generations/" \  -H "Content-Type: application/json" \  -d '{    "prompt": "string"  }'
```

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/ai-model/images/openai/post-v1-images-generations)（New API）。本站为离线整理副本，如有出入以官方为准。
