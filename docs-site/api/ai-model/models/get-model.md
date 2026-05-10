---
title: 获取模型
description: GET /v1/models/{model} — 检索单个模型实例
apiMethod: GET
apiPath: /v1/models/{model}
outline: false
---

# 获取模型

> 检索一个模型实例。

下列约定以 OpenAI 兼容 **`GET /v1/models/{model}`** 为主；路径中的 **`{model}`** 为模型 ID（例如 `gpt-5.4`、`claude-sonnet-4-6`）。是否开放、字段是否齐全以**当前网关**为准。

| 项目 | 值 |
| --- | --- |
| 方法 | `GET` |
| 路径 | `/v1/models/{model}` |
| 认证 | `Authorization: Bearer <token>` |

示例网关根：`https://atomflow.vip/v1`（请替换为你的部署地址）。

## 路径参数

- **`model`**：要检索的模型 ID。

## 响应

- **`id`**：模型标识符。  
- **`object`**：始终为 `model`。  
- **`created`**：创建时间戳。  
- **`owned_by`**：模型提供方。  

部分网关的详情路由还可包含扩展公开元数据，例如：`category`、`pricing_unit`、`capability_flags`、`supported_operations`、`pricing_provenance`、`public_contract_summary`、完整 **`public_contract`**，以及非聊天推荐相关的 **`agent_preferences`** 等（实际键名可能带前缀）；具体以响应为准。

### 非聊天推荐元数据

对非聊天模型，详情可能返回 **`agent_preferences`** 等嵌套结构，用于查看例如：

- `preferred_rank`、`success_rate_24h`、`sample_count_24h`、`status`、`updated_at`  

公开响应中可能将 `basis.channel_id`、`basis.physical_model` 置为 `null`，以便在不暴露内部路由标识的前提下消费推荐信号。

### 公开详情元数据

与 **`GET /v1/models`** 列表相比，详情还可额外包含例如：

- `capability_flags`  
- `supported_operations`  
- `pricing_provenance`  
- `public_contract_summary`  
- `public_contract`  

## 认证

```http
Authorization: Bearer sk-your-api-key
```

## 错误处理

模型不存在时可能返回 **404**，正文示例形态如下（以网关实际字段为准）：

```json
{
  "error": {
    "message": "Model 'invalid-model' not found",
    "type": "invalid_request_error",
    "code": "model_not_found"
  }
}
```

## 另见

- [列出模型（OpenAI 格式）](./list/listmodels) — `GET /v1/models`  
- [模型列表](./) — 本组索引  
