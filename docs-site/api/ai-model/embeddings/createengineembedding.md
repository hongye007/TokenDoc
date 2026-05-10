---
title: "原生Gemini格式"
source: "https://docs.newapi.pro/zh/docs/api/ai-model/embeddings/createengineembedding"
syncedAt: "2026-05-10T11:17:03.759Z"
---

POST

`/v1/engines/{model}/embeddings`

BearerAuth

AuthorizationBearer `<token>`

model\*string

模型/引擎 ID

## [Request Body](#request-body)

application/json

model\*string

input\*string|

要嵌入的文本

encoding\_format?string

dimensions?integer

输出向量维度

## [Response Body](#response-body)

```
curl -X POST "https://loading/v1/engines/string/embeddings" \  -H "Content-Type: application/json" \  -d '{    "model": "text-embedding-ada-002",    "input": "string"  }'
```

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/ai-model/embeddings/createengineembedding)（New API）。本站为离线整理副本，如有出入以官方为准。
