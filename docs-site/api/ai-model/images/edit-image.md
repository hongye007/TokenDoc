---
title: 编辑图像
description: POST /v1/images/edits — 按提示词与源图编辑图像
apiMethod: POST
apiPath: /v1/images/edits
outline: false
---

# 编辑图像

> 根据提示词和源图像编辑图像。

| 项目 | 值 |
| --- | --- |
| 方法 | `POST` |
| 路径 | `/v1/images/edits` |
| 认证 | `Authorization: Bearer <token>` |

建议超时 **≥ 120s**；异步任务形态与「创建图像」类似（`poll_url`、轮询任务等）。

## 请求体
- **源图**：multipart `image`；或 JSON `image_url` / `image_urls` / `images[]`（`image_url` 或 `file_id`）。远程 URL 须为公网 `http`/`https`，且满足格式、大小、拉取策略等限制（以网关校验规则为准）。  
- **`mask`**：可选；透明区域指示编辑区域（PNG，与 `image` 同尺寸等约束）。  
- **`prompt`**、**`model`**、**`n`**、**`size`**、**`response_format`**、**`async`**、**`user`**。  
- **`gpt-image-2`** 已支持多图引用（最多 16 张源图等，见原文）。

## 响应
- **`created`**、**`data[]`**（`url` / `b64_json`）。  
- 异步时含 **`status`**、**`task_id`**、**`poll_url`**。

## 注意事项

远程拉图失败会在请求进入上游前返回输入错误（`400` / `413` 等）。私有素材请用 **multipart 上传** 或 **`/v1/files`** 引用。
