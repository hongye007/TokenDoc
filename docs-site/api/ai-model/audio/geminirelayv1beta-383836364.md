---
title: "原生Gemini格式"
source: "https://docs.newapi.pro/zh/docs/api/ai-model/audio/geminirelayv1beta-383836364"
syncedAt: "2026-05-10T11:17:04.624Z"
---

AI 模型接口

音频（Audio）

Gemini 音频生成接口。 可使用gemini-2.5-flash-preview-tts等模型

POST

`/v1beta/models/{model}:generateContent`

BearerAuth

AuthorizationBearer `<token>`

model\*string

模型名称

## [Request Body](#request-body)

application/json

contents\*

generationConfig\*

## [Response Body](#response-body)

```
curl -X POST "https://loading/v1beta/models/string:generateContent" \  -H "Content-Type: application/json" \  -d '{    "contents": [      {}    ],    "generationConfig": {      "responseModalities": [        "string"      ],      "speechConfig": {        "voiceConfig": {          "prebuiltVoiceConfig": {            "voiceName": "string"          }        }      }    }  }'
```

这篇文档对您有帮助吗？

最后更新于

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/ai-model/audio/geminirelayv1beta-383836364)（New API）。本站为离线整理副本，如有出入以官方为准。
