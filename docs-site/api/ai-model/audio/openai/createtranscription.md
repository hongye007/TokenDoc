---
title: "音频转录"
source: "https://docs.newapi.pro/zh/docs/api/ai-model/audio/openai/createtranscription"
syncedAt: "2026-05-10T11:17:05.531Z"
---

POST

`/v1/audio/transcriptions`

## [Authorization](#authorization)

BearerAuth

AuthorizationBearer `<token>`

使用 Bearer Token 认证。 格式: `Authorization: Bearer sk-xxxxxx`

In: `header`

## [Request Body](#request-body)

multipart/form-data

file\*file

音频文件

Format`binary`

model\*string

language?string

ISO-639-1 语言代码

prompt?string

response\_format?string

Default`"json"`

Value in`"json" | "text" | "srt" | "verbose_json" | "vtt"`

temperature?number

timestamp\_granularities?array`<string>`

## [Response Body](#response-body)

### 

application/json

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/ai-model/audio/openai/createtranscription)（New API）。本站为离线整理副本，如有出入以官方为准。
