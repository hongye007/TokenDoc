---
title: 获取图像变体
description: POST /v1/images/variations — 创建给定图像的变体
apiMethod: POST
apiPath: /v1/images/variations
outline: false
---

# 获取图像变体

> 创建给定图像的变体。

需使用 **`multipart/form-data`**。

| 项目 | 值 |
| --- | --- |
| 方法 | `POST` |
| 路径 | `/v1/images/variations` |
| 认证 | `Authorization: Bearer <token>` |

建议超时 **≥ 120s**。

## 请求体
- **`image`**：基础图，须为 **PNG**、小于 **50MB**、**正方形**。  
- **`model`**：当前文档以 **`dall-e-2`** 为限。  
- **`n`**：生成数量（1–10）。  
- **`size`**：`256x256`、`512x512` 或 `1024x1024`。  
- **`response_format`**：`url` 或 `b64_json`。  
- **`user`**。

## 响应
- **`created`**、**`data[]`**（`url` / `b64_json`）。

## 注意事项

变体能力适用于 **DALL·E 2**；生成图在风格与内容上与原图相似。
