---
title: 重排序文档
description: POST /v1/rerank — 按查询相关性对文档重排序
apiMethod: POST
apiPath: /v1/rerank
outline: false
---

# 重排序文档

> 根据与查询的相关性对文档进行重排序。

使用语义相似度模型对候选文档重排序，适用于搜索排序、RAG 等场景。

本端点同样可能耗时较长，建议 HTTP 超时 **不低于 120s**。

| 项目 | 值 |
| --- | --- |
| 方法 | `POST` |
| 路径 | `/v1/rerank` |
| 认证 | `Authorization: Bearer <token>` |

## 请求体
- **`model`**：重排序模型 ID（如 `BAAI/bge-reranker-v2-m3`、`qwen3-rerank` 等，以网关为准）。  
- **`query`**：查询语句。  
- **`documents`**：待排序文档字符串数组。  
- **`top_n`**：返回前若干条；默认可视为全部。  
- **`return_documents`**：是否在结果中包含原始文档文本。

## 响应
- **`results`**：已排序结果列表；每项常含：  
  - **`index`**：原始文档下标  
  - **`relevance_score`**：相关性分数（如 0–1）  
  - **`document`**：原文（当 `return_documents=true`）  
- **`model`**、**`usage`**（token 统计）。

## 另见

- [创建 Embedding](../embeddings/createembedding) — `POST /v1/embeddings`  
