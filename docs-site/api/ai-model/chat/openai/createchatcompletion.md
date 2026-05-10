---
title: 聊天补全
description: POST /v1/chat/completions — 为聊天消息创建补全
apiMethod: POST
apiPath: /v1/chat/completions
outline: false
---

# 创建聊天补全

> 为聊天消息创建补全。

兼容 **OpenAI Chat Completions**。字段与语义与 OpenAI 官方及常见兼容网关一致；若未使用 Responses 专用能力，一般优先使用本路径。

| 项目 | 值 |
| --- | --- |
| 方法 | `POST` |
| 路径 | `/v1/chat/completions` |
| 认证 | `Authorization: Bearer <token>` |

## Request Body
- **`model`**：要使用的模型 ID。  
- **`messages`**：对话消息列表；每条含 `role`（`system` | `user` | `assistant`）与 `content`（字符串或结构化块）。  
- 当 **`content` 为数组**时，兼容实现可支持多模态块，例如：  
  - 文本：`{ "type": "text", "text": "..." }`  
  - 图片：`{ "type": "image_url", "image_url": { "url": "https://..." } }`  
  - 视频 / 音频：类似 `video_url`、`audio_url` 等（依提供商与路由而定）。  
- **`temperature`**：采样温度，约 0–2。  
- **`max_tokens`**：生成 token 上限。  
- **`stream`**：是否以 SSE 流式返回增量。  
- **`stream_options`**：流式选项（如 `include_usage`）。  
- **`top_p`**、**`frequency_penalty`**、**`presence_penalty`**、**`stop`**、**`tools`**、**`tool_choice`**、**`parallel_tool_calls`** 等：与 OpenAI 兼容语义一致。  
- **`max_completion_tokens`**：部分新模型系列上可作为 `max_tokens` 的替代。  
- **`reasoning_effort`**：具备推理能力时的强度（如 `low` / `medium` / `high`）。  
- **`seed`**：确定性采样种子。  
- **`n`**、**`logprobs`**、**`top_logprobs`**、**`top_k`**、**`response_format`**、**`logit_bias`**、**`user`** 等：见 OpenAI 官方说明。  
- **`cache_control`**（若支持）：如 `type`、`max_age` 等缓存策略字段。

## Response
- **`id`**、**`object`**（`chat.completion`）、**`created`**、**`model`**。  
- **`choices`**：含 `index`、`message`（`role` / `content` 等）、`finish_reason`（如 `stop`、`length`、`tool_calls`）。  
- **`usage`**：`prompt_tokens`、`completion_tokens`、`total_tokens`。

## 多模态请求示例（JSON）

```json
{
  "model": "gemini-2.5-pro",
  "messages": [
    {
      "role": "user",
      "content": [
        { "type": "text", "text": "Describe this video briefly." },
        { "type": "video_url", "video_url": { "url": "https://example.com/demo.mp4" } }
      ]
    }
  ],
  "max_tokens": 64
}
```

生产环境对媒体块建议使用可访问的 **`https`** 公网 URL；网关会将块转换为上游所需形态。

## 另见

- [创建响应](./createresponse) — `POST /v1/responses`  
- [创建消息](../createmessage) — Anthropic Messages 格式  
