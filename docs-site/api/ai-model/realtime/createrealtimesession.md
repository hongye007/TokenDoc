---
title: "原生OpenAI格式"
source: "https://docs.newapi.pro/zh/docs/api/ai-model/realtime/createrealtimesession"
syncedAt: "2026-05-10T11:16:42.251Z"
---

AI 模型接口

实时语音（Realtime）

建立 WebSocket 连接用于实时对话。

**注意**: 这是一个 WebSocket 端点，需要使用 WebSocket 协议连接。

连接 URL 示例: `wss://api.example.com/v1/realtime?model=gpt-4o-realtime`

GET

`/v1/realtime`

BearerAuth

AuthorizationBearer `<token>`

model?string

要使用的模型

## [Response Body](#response-body)

```
curl -X GET "https://loading/v1/realtime"
```

这篇文档对您有帮助吗？

最后更新于

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/ai-model/realtime/createrealtimesession)（New API）。本站为离线整理副本，如有出入以官方为准。
