---
title: 创建图像
description: POST /v1/images/generations — 根据 prompt 创建图像
apiMethod: POST
apiPath: /v1/images/generations
outline: false
---

# 创建图像

> 根据 prompt 创建图像。

| 项目 | 值 |
| --- | --- |
| 方法 | `POST` |
| 路径 | `/v1/images/generations` |
| 认证 | `Authorization: Bearer <token>` |

同步生成可能较慢，建议 HTTP 超时 **≥ 120s**；若响应含 `status: "pending"`、`task_id`、`poll_url`，请按文档轮询任务。

## 概述
- **`gpt-image-2`** 等模型计费与参数以上游与网关说明为准；支持 `prompt`、`n`、`size`、`quality`、`response_format`、`async`、`background`、`output_format`、`moderation`、`user` 等（依模型）。  
- **Google Gemini 图片家族**与 OpenAI 家族参数规则不同：部分模型支持 **`aspect_ratio`**、**`resolution`**（如 `1k`/`2k`/`4k`），Flash 系列通常只发 **`aspect_ratio`**，勿对不支持的模型发送 `resolution`。  
- **`size`**：对 `gpt-image-2` 可为 `auto` 或 `WIDTHxHEIGHT`（需满足 16 像素对齐、边长与像素总量等约束，见原文）；Gemini 家族可将 `size` 视为兼容别名。

## 请求体
- **`model`**、**`prompt`**、**`n`**、**`size`**、**`aspect_ratio`**、**`resolution`**、**`quality`**、**`response_format`**（`url` / `b64_json`）、**`async`**、**`user`** 等。  
- **`async: true`** 时可能先返回任务，再轮询 `/v1/tasks/{task_id}` 等（以网关为准）。

## 响应
- **内联**：`created`、`data[]`（`url`、`b64_json`、`revised_prompt` 等）。  
- **异步**：`status: "pending"`、`task_id`、`poll_url` 等。

## Flash 系列 JSON 示例

```json
{
  "model": "gemini-2.5-flash-image",
  "prompt": "A clean editorial product shot of a citrus soda can",
  "aspect_ratio": "16:9"
}
```
