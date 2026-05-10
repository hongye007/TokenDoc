---
title: 创建转录
description: POST /v1/audio/transcriptions — 语音转文字
apiMethod: POST
apiPath: /v1/audio/transcriptions
outline: false
---

# 创建转录

> 将音频转录为输入语言。

请求为 **`multipart/form-data`**（上传音频文件）。

| 项目 | 值 |
| --- | --- |
| 方法 | `POST` |
| 路径 | `/v1/audio/transcriptions` |
| 认证 | `Authorization: Bearer <token>` |

建议超时 **≥ 120s**。

## 请求体
- **`file`**：音频文件；支持 flac、mp3、mp4、mpeg、mpga、m4a、ogg、wav、webm 等。  
- **`model`**：如 **`whisper-1`**。  
- **`language`**：可选，ISO-639-1（如 `en`、`zh`）。  
- **`prompt`**：可选引导文本。  
- **`response_format`**：`json`、`text`、`srt`、`verbose_json`、`vtt`。  
- **`temperature`**、**`timestamp_granularities`**（配合 `verbose_json`）等。

## 响应
- 默认 JSON 含 **`text`**。  
- **`verbose_json`** 下含 `task`、`language`、`duration`、`segments`、词级时间戳等。

## 翻译为英文

若要将音频**翻译为英语**，应使用 **`POST /v1/audio/translations`**（见 [音频翻译](./create-translation)）。
