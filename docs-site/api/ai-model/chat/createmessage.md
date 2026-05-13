---
title: 创建消息
description: POST /v1/messages — Anthropic Messages API
apiMethod: POST
apiPath: /v1/messages
outline: false
---

# 创建消息

> 使用 Anthropic Messages API 格式创建消息。

本端点提供 **Anthropic Messages** 兼容形态，适用于 Claude 及扩展思考等能力。

| 项目 | 值 |
| --- | --- |
| 方法 | `POST` |
| 路径 | `/v1/messages` |
| 请求头 | `x-api-key` 或等价鉴权；**`anthropic-version: 2023-06-01`**（必填） |

使用 Anthropic 官方 SDK 时，Base URL 一般为**网关根地址**（是否带 `/v1` 以 SDK 与网关约定为准）。本站示例使用 **`@TD_API_GATEWAY_ORIGIN@`**，请求路径仍为 **`/v1/messages`**。

## 请求头

- **`x-api-key`**：API Key（可与 Bearer 方案二选一，具体以网关为准）。  
- **`anthropic-version`**：例如 **`2023-06-01`**。  
- **`Content-Type`**：`application/json`。

## 请求体

- **`model`**：Claude 模型 ID（如 `claude-sonnet-4-6`）。  
- **`messages`**：`role` + `content`；视觉模型下 `content` 可为块数组：  
  - 文本：`{ "type": "text", "text": "..." }`  
  - 图片 URL：`{ "type": "image", "source": { "type": "url", "url": "https://..." } }`  
  - Base64：`{ "type": "image", "source": { "type": "base64", "media_type": "image/png", "data": "..." } }`  
- **`max_tokens`**、**`system`**、**`temperature`**、**`stream`**。  
- **`thinking`**（扩展思考）：如 `type: "enabled"`、`budget_tokens`。  
- **`tools`**、**`tool_choice`**、**`top_p`**、**`top_k`**、**`stop_sequences`**、**`metadata`** 等。

## 响应

- **`id`**、**`type`**（`message`）、**`role`**（`assistant`）。  
- **`content`**：内容块数组（`text`、`thinking`、`tool_use` 等）。  
- **`model`**、**`stop_reason`**、**`usage`**（`input_tokens` / `output_tokens`）。

## 图片输入示例（JSON）

```json
{
  "model": "claude-sonnet-4-6",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": [
        { "type": "text", "text": "请描述这张图片。" },
        {
          "type": "image",
          "source": { "type": "url", "url": "https://example.com/demo.jpg" }
        }
      ]
    }
  ]
}
```

## 扩展思考（Python）

```python
message = client.messages.create(
    model="claude-opus-4-6",
    max_tokens=16000,
    thinking={"type": "enabled", "budget_tokens": 10000},
    messages=[{"role": "user", "content": "Solve this math problem..."}],
)
```

可对 `message.content` 按 `thinking` / `text` 等类型分别处理。

## Message Batches（路由列表）

若网关暴露 Anthropic 批量接口，常见路径包括：

- `POST /v1/messages/batches`  
- `GET /v1/messages/batches`  
- `GET /v1/messages/batches/:message_batch_id`  
- `GET /v1/messages/batches/:message_batch_id/results`  
- `POST /v1/messages/batches/:message_batch_id/cancel`  
- `DELETE /v1/messages/batches/:message_batch_id`  

批量项若引用 `file_id`，可能需额外 Beta 请求头（见上游文档）。

## 另见

- [聊天补全](./openai/createchatcompletion)  
- [创建响应](./openai/createresponse)  
