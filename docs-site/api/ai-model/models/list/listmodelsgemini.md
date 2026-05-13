---
title: "列出模型（Gemini 原生格式）"
description: GET /v1beta/models — 以 Gemini REST 形态返回模型列表
apiMethod: GET
apiPath: /v1beta/models
---

# 列出模型（Gemini 原生格式）

当客户端需要与 **Google Gemini 官方 REST** 对齐的「列出模型」响应时，可调用本路径（顶层字段为 `models` 数组），而不是 OpenAI 的 `object: list` + `data` 结构。

| 项目 | 值 |
| --- | --- |
| 方法 | `GET` |
| 路径 | `/v1beta/models` |
| 认证 | `Authorization: Bearer <token>` |

## 认证

| Header | 说明 |
| --- | --- |
| `Authorization` | `Bearer` + 空格 + 控制台 API Key。 |

## 请求示例

```bash
curl -sS "@TD_API_GATEWAY_ORIGIN@/v1beta/models" \
  -H "Authorization: Bearer sk-your-token"
```

## 成功响应
`200`，JSON 顶层为 `models`：

```json
{
  "models": [
    {
      "name": "models/gemini-pro",
      "version": "string",
      "displayName": "string",
      "description": "string",
      "inputTokenLimit": 0,
      "outputTokenLimit": 0,
      "supportedGenerationMethods": ["generateContent"]
    }
  ]
}
```

后续调用 Gemini 生成类接口时，应使用返回项中的 `name`（如 `models/gemini-2.5-pro`）作为模型标识，具体以你环境为准。

## 另见

- [列出模型（OpenAI 格式）](./listmodels) — `GET /v1/models`
- [模型列表](../)
