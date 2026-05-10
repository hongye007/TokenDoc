---
title: "编辑图像"
source: "https://docs.newapi.pro/zh/docs/api/ai-model/images/openai/post-v1-images-edits"
syncedAt: "2026-05-10T11:17:07.250Z"
---

POST

`/v1/images/edits`/

Bearer

AuthorizationBearer `<token>`

In: `header`

## [Request Body](#request-body)

multipart/form-data

image\*file

mask?file

prompt\*string

所需图像的文本描述。最大长度为 1000 个字符。

n?string

要生成的图像数。必须介于 1 和 10 之间。

size?string

生成图像的大小。必须是`256x256`、`512x512`或 `1024x1024`之一。

response\_format?string

生成的图像返回的格式。必须是`url`或`b64_json`。

user?string

代表您的最终用户的唯一标识符，可以帮助 OpenAI 监控和检测滥用行为。[了解更多](https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids)。

model?string

## [Response Body](#response-body)

```
curl -X POST "https://loading/v1/images/edits/" \  -F image="cmMtdXBsb2FkLTE2ODc4MzMzNDc3NTEtMjA=/31225951_59371037e9_small.png" \  -F prompt="A cute baby sea otter wearing a beret."
```

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/ai-model/images/openai/post-v1-images-edits)（New API）。本站为离线整理副本，如有出入以官方为准。
