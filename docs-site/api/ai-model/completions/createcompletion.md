---
title: "原生OpenAI格式"
source: "https://docs.newapi.pro/zh/docs/api/ai-model/completions/createcompletion"
syncedAt: "2026-05-10T11:16:37.629Z"
---

```
{
  "id": "string",
  "object": "text_completion",
  "created": 0,
  "model": "string",
  "choices": [
    {
      "text": "string",
      "index": 0,
      "finish_reason": "string"
    }
  ],
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "prompt_tokens_details": {
      "cached_tokens": 0,
      "text_tokens": 0,
      "audio_tokens": 0,
      "image_tokens": 0
    },
    "completion_tokens_details": {
      "text_tokens": 0,
      "audio_tokens": 0,
      "reasoning_tokens": 0
    }
  }
}
```

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/ai-model/completions/createcompletion)（New API）。本站为离线整理副本，如有出入以官方为准。
