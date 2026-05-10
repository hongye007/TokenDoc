---
title: 音频翻译
description: POST /v1/audio/translations — 将音频译为英文文本
apiMethod: POST
apiPath: /v1/audio/translations
outline: false
---

# 音频翻译

> 将音频翻译为英文文本。

与**转录**不同：本端点**始终输出英文**，无论源语言为何。

| 项目 | 值 |
| --- | --- |
| 方法 | `POST` |
| 路径 | `/v1/audio/translations` |
| 认证 | `Authorization: Bearer <token>` |

请求为 **`multipart/form-data`**；建议超时 **≥ 120s**。

## 请求体（节选）

- **`file`**：音频；格式见文档；最大约 **25MB**。  
- **`model`**：**`whisper-1`**。  
- **`prompt`**：可选，英文引导。  
- **`response_format`**：`json`、`text`、`srt`、`verbose_json`、`vtt`。  
- **`temperature`**：0–1。

## 响应（节选）

- 英文 **`text`**；**`verbose_json`** 下含 `task`、`language`、`duration`、`segments` 等。

## 翻译与转录

|  | 翻译 | 转录 |
| --- | --- | --- |
| 输出语言 | 始终英文 | 与输入语言一致 |
| 场景 | 外语音频 → 英文 | 保留原语言 |
| `language` 参数 | 不适用（会被忽略） | 可选提示 |

## 另见

- [创建转录](./create-transcription) — `POST /v1/audio/transcriptions`  
