---
title: 创建响应
description: POST /v1/responses — OpenAI Responses API 格式
apiMethod: POST
apiPath: /v1/responses
outline: false
---

# 创建响应

> 使用 OpenAI Responses API 格式创建响应。

**Responses API** 为 OpenAI 较新的有状态对话形态。若无需 Responses 专有行为，默认 OpenAI 兼容路径一般为 **`POST /v1/chat/completions`**。

| 项目 | 值 |
| --- | --- |
| 方法 | `POST` |
| 路径 | `/v1/responses` |
| 认证 | `Authorization: Bearer <token>` |

示例网关：`https://atomflow.vip/v1`。

## Request Body
- **`model`**：模型 ID。  
- **`input`**：由对话项组成的列表；项可为 `message`、`function_call`、`function_call_output` 等类型。  
- 多模态下，`message.content` 可为字符串或内容块数组；图像能力模型建议使用 **`input_image`** 等内容块，而不是把 URL/Base64 直接塞进纯文本。  
  - 示例：`{ "type": "input_text", "text": "..." }`、`{ "type": "input_image", "image_url": "https://..." }` 或 `data:image/png;base64,...`。  
- **`instructions`**：系统级指令（等同 system 消息）。  
- **`max_output_tokens`**、**`temperature`**、**`tools`**、**`stream`**、**`previous_response_id`**、**`store`**、**`metadata`**、**`text`**（含 `text.format`）、**`parallel_tool_calls`**、**`top_p`**、**`reasoning`**（如 `effort`）等：语义与 OpenAI 文档及网关实现一致；是否全部可用取决于模型与路由。

## Response
- **`id`**、**`object`**（`response`）、**`created`**、**`model`**。  
- **`output`**：模型生成的输出项列表。  
- **`usage`**：token 统计。

## Vision 输入示例（JSON）

```json
{
  "model": "gpt-5.4",
  "input": [
    {
      "type": "message",
      "role": "user",
      "content": [
        { "type": "input_text", "text": "Please describe this image." },
        { "type": "input_image", "image_url": "https://example.com/demo.jpg" }
      ]
    }
  ]
}
```

Base64 图片可使用 `image_url: "data:image/jpeg;base64,..."` 形态。

## 另见

- [聊天补全](./createchatcompletion) — `POST /v1/chat/completions`  
- [创建消息](../createmessage) — Claude Messages  
