---
title: 创建 Embedding
description: POST /v1/embeddings — 创建文本向量
apiMethod: POST
apiPath: /v1/embeddings
outline: false
---

# 创建 Embedding

> 创建一个表示输入文本的 embedding 向量。

本端点为**非聊天类同步接口**，路由到的模型处理耗时可能较长；建议将 HTTP 客户端超时设为 **至少 120s**，避免默认 30s 过早断开。

| 项目 | 值 |
| --- | --- |
| 方法 | `POST` |
| 路径 | `/v1/embeddings` |
| 认证 | `Authorization: Bearer <token>` |

示例网关：`@TD_GATEWAY_V1@`。

## 请求体
- **`model`**：Embedding 模型 ID（如 `text-embedding-3-small`）。  
- **`input`**：待嵌入文本，字符串或字符串数组。  
- **`encoding_format`**：`float` 或 `base64`（若支持）。  
- **`dimensions`**：输出维度（依模型而定）。  
- **`user`**：终端用户标识（滥用监控等场景）。

## 可用模型（示例）

| 模型 | 维度 | 说明 |
| --- | --- | --- |
| `text-embedding-3-large` | 3072 | 质量优先 |
| `text-embedding-3-small` | 1536 | 平衡 |
| `text-embedding-ada-002` | 1536 | 旧版 |

线上以网关实际可用模型为准。

## 响应
- **`object`**：列表形态下为 `list`。  
- **`data`**：embedding 对象数组；每项含 `object`（`embedding`）、`index`、`embedding`（向量）。  
- **`model`**、**`usage`**（如 `prompt_tokens`、`total_tokens`）。

## 批量 Embeddings（Python）

```python
response = client.embeddings.create(
    model="text-embedding-3-small",
    input=[
        "First document text",
        "Second document text",
        "Third document text",
    ],
)

for i, data in enumerate(response.data):
    print(f"Document {i}: {len(data.embedding)} dimensions")
```

## 另见

- [重排序文档](../rerank/creatererank) — `POST /v1/rerank`  
