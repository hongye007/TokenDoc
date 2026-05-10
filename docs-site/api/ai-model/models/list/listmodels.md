---
title: "列出模型（OpenAI 格式）"
description: GET /v1/models — 列出可用模型（右侧栏多语言请求与响应示例）
apiMethod: GET
apiPath: /v1/models
outline: false
---

# 列出模型

> 列出当前令牌可见的全部可用模型，便于在发起对话、补全、绘图等请求前做发现与筛选。

桌面端可在 **右侧栏** 切换 **cURL / Python / JavaScript / Go / PHP** 请求示例，并一键复制 **Response** JSON（网关地址以正文 `@TD_DOMAIN_LABEL@` 为准）。

下列约定以 **OpenAI 兼容** `GET /v1/models` 为主；**具体字段与查询参数是否出现，以你所接入的网关实际响应为准**（部分实现会包含更多扩展键）。

| 项目 | 值 |
| --- | --- |
| 方法 | `GET` |
| 路径 | `/v1/models` |
| 认证 | `Authorization: Bearer <token>` |

下文示例以 `@TD_MAIN_SITE@` 为网关根地址；自建部署请替换为你的 API 根 URL。

## 认证

使用控制台创建的 API Key：

```http
Authorization: Bearer sk-your-api-key
```

## 响应

- 顶层 `object` 在 OpenAI 兼容形态下为 **`list`**。
- 模型列表位于 **`data`** 数组中；每一项为一个 **model** 对象。

每个模型对象在 **最小 OpenAI 兼容** 场景下通常包含：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | string | 模型标识符，供后续接口的 `model` 参数使用。 |
| `object` | string | 固定为 `model`。 |
| `created` | integer | 创建时间戳（秒）。 |
| `owned_by` | string | 模型提供方或归属标签（具体取值以网关为准）。 |

部分网关还会在每条模型上附带 **扩展元数据**，用于分类、定价单位、能力摘要等，常见语义示例（实际 JSON 键名以响应为准，可能带命名空间前缀）：

- `category`（string）：公开模型分类  
- `pricing_unit`（string 或 `null`）  
- `capability_flags`（object 或 `null`）  
- `supported_operations`（array 或 `null`）：非聊天类能力等  
- `pricing_provenance`（object 或 `null`）  
- `public_contract_summary`（object 或 `null`）  
- `agent_preferences`（object）：在存在推荐场景等条件下可能出现  

若你的环境提供 **单模型详情** 接口（如 `GET /v1/models/{model}`），更完整的合约、仅详情可见的元数据通常在该接口返回；`GET /v1/models` 更侧重 **发现与列表**。

## 查询参数

下列为 **部分实现** 中常见的可选查询能力；**未在响应中体现或未文档化的参数，网关可能直接忽略**，请以实际行为为准。

| 用途 | 说明 |
| --- | --- |
| 公开分类筛选 | 可选值示例：`chat`、`image`、`video`、`audio`、`tts`、`stt`、`music`、`3d`、`embedding`、`rerank`、`translation` 等。 |
| 非聊天推荐场景 | 可与 `recommended_for` 等参数配合（若实现支持）；用于图像、视频、音乐等场景的模型排序或过滤。 |
| 提供方筛选 | 例如 `openai`、`anthropic`、`google`、`deepseek` 等。 |
| 模型标签 | 例如 `chat`、`image`、`video`、`embedding`、`translation` 等。 |

此外，在 **New API 类网关** 上，查询参数 **`key`** 还可用于参与 **Gemini 列表格式** 的判定（与官方 New API 行为一致），与上表中的「发现类」参数属于不同维度，可同时存在或仅实现其一。

带查询参数的示例：

```bash
curl -sS "@TD_GATEWAY_V1@/models?provider=openai" \
  -H "Authorization: Bearer sk-your-api-key"
```

## 按提供方筛选（客户端）

在已拉取列表的前提下，可在应用内按 `owned_by` 分组：

```python
models = client.models.list().data

openai_models = [m for m in models if m.owned_by == "openai"]
anthropic_models = [m for m in models if m.owned_by == "anthropic"]
```

## 模型类别（示例）

下列 **提供方与模型名仅为示例**，便于理解 `owned_by` 与 `id`；线上以网关返回为准。

| 提供方 | 示例模型 |
| --- | --- |
| `openai` | gpt-5.4, gpt-5.4-mini, gpt-5-mini, gpt-4o, dall-e-3 |
| `anthropic` | claude-opus-4-6, claude-sonnet-4-6, claude-haiku-4-5 |
| `google` | gemini-3-pro-preview, gemini-3-flash-preview, gemini-2.5-pro |
| `deepseek` | deepseek-r1, deepseek-v3-2 |
| `xai` | grok-4.1 |
| `moonshot` | kimi-k2.5 |
| `minimax` | minimax-m2.1 |
| `meta` | llama-3.3-70b, llama-3.1-405b |

## 多厂商列表格式（可选请求头）

部分 **New API 兼容网关** 支持在同一 `GET /v1/models` 上，通过请求头切换列表 JSON 的「形态」（与 [New API 官方说明](https://docs.newapi.pro/zh/docs/api/ai-model/models/list/listmodels) 一致）：

| 条件 | 返回形态 |
| --- | --- |
| 同时携带 `x-api-key` 与 `anthropic-version` | Anthropic 模型列表结构 |
| 携带 `x-goog-api-key`，或查询参数 `key`（作 Google Key） | Gemini 模型列表结构 |
| 以上均未命中 | **OpenAI** `object: list` + `data[]` |

## 错误

鉴权失败等场景可能返回 `401` 等状态，正文常为带 `error.message` 的 JSON，具体以网关响应为准。

## 另见

- [列出模型（Gemini 原生格式）](./listmodelsgemini) — `GET /v1beta/models`
- [模型列表](../)
