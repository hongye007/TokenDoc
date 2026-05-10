---
title: "Gemini文本聊天"
source: "https://docs.newapi.pro/zh/docs/api/ai-model/chat/gemini/geminirelayv1beta"
syncedAt: "2026-05-10T11:20:08.765Z"
---

AI 模型接口

聊天（Chat）

原生Gemini格式

代理 Gemini API 请求。 路径格式: `/v1beta/models/{model_name}:{action}`

例如:

*   `/v1beta/models/gemini-2.5-pro:generateContent`
*   `/v1beta/models/gemini-2.5-pro:streamGenerateContent?alt=sse`

POST

`/v1beta/models/{model}:generateContent`

BearerAuth

AuthorizationBearer `<token>`

model\*string

模型名称

## [Request Body](#request-body)

application/json

contents?

generationConfig?

safetySettings?

tools?

systemInstruction?

## [Response Body](#response-body)

```
curl -X POST "https://loading/v1beta/models/string:generateContent" \  -H "Content-Type: application/json" \  -d '{}'
```

这篇文档对您有帮助吗？

最后更新于

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/ai-model/chat/gemini/geminirelayv1beta)（New API）。本站为离线整理副本，如有出入以官方为准。
