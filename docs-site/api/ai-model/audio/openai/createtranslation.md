---
title: "音频翻译"
source: "https://docs.newapi.pro/zh/docs/api/ai-model/audio/openai/createtranslation"
syncedAt: "2026-05-10T11:17:06.414Z"
---

POST

`/v1/audio/translations`

## [Authorization](#authorization)

BearerAuth

AuthorizationBearer `<token>`

使用 Bearer Token 认证。 格式: `Authorization: Bearer sk-xxxxxx`

In: `header`

## [Request Body](#request-body)

multipart/form-data

file\*file

Format`binary`

model\*string

prompt?string

response\_format?string

temperature?number

## [Response Body](#response-body)

### 

application/json

```
curl -X POST "https://loading/v1/audio/translations" \  -F file="string" \  -F model="string"
```

```
{
  "text": "string"
}
```

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/ai-model/audio/openai/createtranslation)（New API）。本站为离线整理副本，如有出入以官方为准。
