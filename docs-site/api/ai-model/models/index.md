---
title: "模型列表"
description: 列出与发现模型：OpenAI / Gemini 列表及单模型查询说明（含右侧多语言请求与响应示例）
outline: false
apiMethod: GET
apiPath: /v1/models
---

# 模型列表

本组接口用于在调用对话、补全等能力之前，**拉取当前账号可见的模型清单**（及可选的单模型详情），并与控制台、模型广场中展示的可用范围相对应。

在 **本页与 [列出模型（OpenAI 格式）](./list/listmodels)** 的桌面视图下，右侧提供 **多语言请求示例**（cURL、Python、JavaScript、Go、PHP）与 **JSON 响应样例**（网关 Base URL 以文档示例 `atomflow.vip` 为准，请替换为你的部署地址）。

网关可能在同一路径上按请求头返回 **OpenAI**、**Anthropic** 或 **Gemini** 形态的列表；另提供 **Gemini 原生** 路径，便于已对接 Google API 形态的客户端直接使用。

## 接口一览

| 文档 | 方法 | 路径 | 说明 |
| --- | --- | --- | --- |
| [列出模型（OpenAI 格式）](./list/listmodels) | `GET` | `/v1/models` | 响应字段、查询参数与常见 OpenAI 兼容实现一致方向的说明；正文含多厂商列表格式、错误与扩展字段说明。 |
| [列出模型（Gemini 原生格式）](./list/listmodelsgemini) | `GET` | `/v1beta/models` | 返回与 Gemini REST 对齐的 `models` 数组。 |
| [获取模型](./get-model) | `GET` | `/v1/models/{model}` | 若网关开放，用于查询单个模型详情；未开放时以列表接口为准。 |

## 响应（OpenAI 列表形态）

- 顶层 **`object`** 在 OpenAI 兼容形态下为 **`list`**。
- 模型列表位于 **`data`** 数组中；每一项为一个 **model** 对象。

每个模型在最小兼容场景下通常包含：

- **`id`**（string）：模型标识符  
- **`object`**（string）：`model`  
- **`created`**（integer）：创建时间戳  
- **`owned_by`**（string）：模型提供方  

部分网关还会在条目上附带 **扩展元数据**（键名可能带服务商或网关约定前缀），例如与分类、定价、能力摘要相关的字段。更完整的「仅详情可见」元数据一般在 **`GET /v1/models/{model}`** 中；**`GET /v1/models`** 更侧重发现与列表。

## 查询参数

以下为部分实现中常见的 **可选** 能力（未实现的参数可能被网关忽略）：

- **公开分类筛选**：如 `chat`、`image`、`video`、`audio`、`tts`、`stt`、`music`、`3d`、`embedding`、`rerank`、`translation` 等。  
- **非聊天推荐场景**：如 `image`、`video`、`music`、`3d`、`tts`、`stt`、`embedding`、`rerank`、`translation` 等与 `recommended_for` 等参数配合（若支持）。  
- **提供方筛选**：如 `openai`、`anthropic`、`google`、`deepseek` 等。  
- **模型标签**：如 `chat`、`image`、`video`、`embedding`、`translation` 等。  

当存在 `recommended_for` 等推荐语义时，部分网关会按缓存的成功率快照对非聊天模型排序；样本不足的模型仍可能出现在列表中，但排序靠后。

在 **New API 类网关** 上，查询参数 **`key`** 还可能参与 **Gemini 列表格式** 的判定，与上表属于不同维度，可同时存在或仅实现其一。详见 [列出模型（OpenAI 格式）](./list/listmodels) 正文。

## 认证

开放 API 统一使用控制台创建的令牌：

```http
Authorization: Bearer sk-xxxxxx
```

将 `sk-xxxxxx` 替换为你的 **API Key**。勿把密钥写入公开仓库或前端明文配置。

## 使用注意

- 实际返回的模型集合受 **渠道、分组、计费与运营策略** 影响，与右侧示例不一定完全一致。  
- 对话补全、Responses、Claude Messages、**Embedding** 与 **重排序** 等见侧栏 **文本**；**创建 / 编辑图像、变体** 见侧栏 **图像**。TTS、转录、音频翻译等接口说明位于 `api/ai-model/audio/` 文档目录（侧栏入口暂不提供）。
