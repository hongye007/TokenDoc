---
title: "生成图像"
source: "https://docs.newapi.pro/zh/docs/api/ai-model/images/qwen/createimage"
syncedAt: "2026-05-10T11:20:10.637Z"
---

百炼qwen-image系列图片生成

POST

`/v1/images/generations`

BearerAuth

AuthorizationBearer `<token>`

## [Request Body](#request-body)

application/json

model\*string

input\*

parameters?

## [Response Body](#response-body)

```
curl -X POST "https://loading/v1/images/generations" \  -H "Content-Type: application/json" \  -d '{    "model": "string",    "input": {      "messages": [        {}      ]    }  }'
```

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/ai-model/images/qwen/createimage)（New API）。本站为离线整理副本，如有出入以官方为准。
