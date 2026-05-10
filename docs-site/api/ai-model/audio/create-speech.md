---
title: 创建音频
description: POST /v1/audio/speech — 文本转语音
apiMethod: POST
apiPath: /v1/audio/speech
outline: false
---

# 创建音频

> 根据输入文本生成音频（TTS）。

| 项目 | 值 |
| --- | --- |
| 方法 | `POST` |
| 路径 | `/v1/audio/speech` |
| 认证 | `Authorization: Bearer <token>` |

非聊天同步端点，建议 HTTP 超时 **≥ 120s**。

## 请求体
- **`model`**：如 `tts-1`、`tts-1-hd`。  
- **`input`**：文本，最大约 **4096** 字符。  
- **`voice`**：如 `alloy`、`nova`、`onyx` 等（以网关与模型支持的音色列表为准）。  
- **`response_format`**：`mp3`、`opus`、`aac`、`flac`、`wav`、`pcm`。  
- **`speed`**：0.25–4.0。

## 响应

返回所请求格式的**音频二进制**（非 JSON）。
