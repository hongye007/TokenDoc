---
title: "创建视频生成任务"
source: "https://docs.newapi.pro/zh/docs/api/ai-model/videos/createvideogeneration"
syncedAt: "2026-05-10T11:17:08.115Z"
---

AI 模型接口

视频（Videos）

## 创建视频生成任务

提交视频生成任务，支持文生视频和图生视频。

返回任务 ID，可通过 GET 接口查询任务状态。

POST

`/v1/video/generations`

BearerAuth

AuthorizationBearer `<token>`

## [Request Body](#request-body)

application/json

model?string

模型/风格 ID

prompt?string

文本描述提示词

image?string

图片输入 (URL 或 Base64)

duration?number

视频时长（秒）

width?integer

视频宽度

height?integer

视频高度

fps?integer

视频帧率

seed?integer

随机种子

n?integer

生成视频数量

response\_format?string

响应格式

user?string

用户标识

metadata?

扩展参数 (如 negative\_prompt, style, quality\_level 等)

## [Response Body](#response-body)

```
curl -X POST "https://loading/v1/video/generations" \  -H "Content-Type: application/json" \  -d '{}'
```

这篇文档对您有帮助吗？

最后更新于

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/ai-model/videos/createvideogeneration)（New API）。本站为离线整理副本，如有出入以官方为准。
