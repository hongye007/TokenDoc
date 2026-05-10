---
title: "文本转语音"
source: "https://docs.newapi.pro/zh/docs/api/ai-model/audio/openai/createspeech"
syncedAt: "2026-05-10T11:16:41.326Z"
---

POST

`/v1/audio/speech`

BearerAuth

AuthorizationBearer `<token>`

## [Request Body](#request-body)

application/json

model\*string

input\*string

voice\*string

response\_format?string

speed?number

## [Response Body](#response-body)

```
curl -X POST "https://loading/v1/audio/speech" \  -H "Content-Type: application/json" \  -d '{    "model": "tts-1",    "input": "string",    "voice": "alloy"  }'
```

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/ai-model/audio/openai/createspeech)（New API）。本站为离线整理副本，如有出入以官方为准。
