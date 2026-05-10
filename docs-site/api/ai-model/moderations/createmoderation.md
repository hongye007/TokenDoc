---
title: "原生OpenAI格式"
source: "https://docs.newapi.pro/zh/docs/api/ai-model/moderations/createmoderation"
syncedAt: "2026-05-10T11:16:40.405Z"
---

POST

`/v1/moderations`

BearerAuth

AuthorizationBearer `<token>`

## [Request Body](#request-body)

application/json

input\*string|

model?string

## [Response Body](#response-body)

```
curl -X POST "https://loading/v1/moderations" \  -H "Content-Type: application/json" \  -d '{    "input": "string"  }'
```

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/ai-model/moderations/createmoderation)（New API）。本站为离线整理副本，如有出入以官方为准。
