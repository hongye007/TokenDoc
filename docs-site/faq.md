---
title: 常见问题
description: API 调用报错排查、网络与账号、认证权限与客户端环境说明
---

# 常见问题 & 报错指南

欢迎查阅 API 调用常见问题解答。若在使用过程中遇到下列报错，可按对应条目排查。

以下内容整理自 [呆呆兽 Hub · 常见问题](https://www.ddshub.cc/faq)，与多数基于 New API / 同类网关的部署相通；**具体配额、分组与控制台路径以你当前使用的平台为准**。若与上游说明不一致，以服务商最新文档为准。

---

## 服务端 & 网络连接类错误

### `502 Upstream service temporarily unavailable`

**可能原因：** 上游服务暂时不可用，或者您的网络连接不稳定；若使用的是 **1M 上下文**模型，也可能是单次对话上下文超过 **200K** 且未能自动压缩。

**解决方案：**

1. 先关闭 VPN（含 CCSwitch 等代理），稍等数分钟后重试。若网关提供状态页（如 `/status`），可访问以确认 Base URL 连通性。
2. 检查上下文是否超过 200K。若超出，请新开会话，并改用非 1M 上下文版本的模型。

### `Unable to connect API (UND_ERR_SOCKET)` 或 `(ECONNRESET)`

**可能原因：** 本地网络异常、代理节点不稳定，或被防火墙拦截。

**解决方案：** 先排查本地网络；建议关闭 VPN 或代理后重试，或更换网络环境。

### `Unable to connect API (EAI_AGAIN)`

**可能原因：** 本地 DNS 解析异常。

**解决方案：** 检查本地 DNS 是否被污染。可在终端执行 `dig <你的网关域名>`（将占位替换为实际 API 域名）测试解析是否正常。

---

## 账号 & 并发类错误

### `503 Service Unavailable` 或 `503 No available accounts`

**可能原因：** 当前时段请求量大、上游过载，或当前分组并发已达上限。

**解决方案：** 服务可能处于满载，请稍等数分钟后重试。

### `429 Upstream rate limit exceeded, please retry later`

**可能原因：** 请求频率过高，触发限流。

**解决方案：** 暂停请求，等待数分钟后以较低频率重试。

---

## 认证 & 权限类错误

### `401 API key is required in Authorization header...`

**可能原因：** 请求未正确携带 API Key。

**解决方案：** 检查代码或客户端配置，确保在环境变量或 `Authorization` 等请求头中正确写入 API Key。

### `403 API Key is not assigned to any group and cannot be used.`

**可能原因：** API Key 未绑定到任何可用分组。

**解决方案：** 在控制台为该密钥分配可用分组（渠道/分组策略以当前平台为准）。

### `429 api key 日限额已用完`

**可能原因：** 该 API Key 的每日调用额度已用尽。

**解决方案：** 在控制台查看该密钥的额度与日限额，按需充值或调整限额。

---

## 客户端 & 特定环境限制

### `503 No available accounts: this group only allows Claude Code clients`

**可能原因：** 当前分组/渠道仅允许来自 **Claude Code** 客户端的调用。

**解决方案：** 在 Claude Code 客户端环境中发起调用。

### 使用 CCSwitch 时出现 `503` 报错

**可能原因：** 触发了「仅允许 Claude Code 客户端」类限制。

**解决方案：** 在 Claude Code 扩展/插件环境中使用一般不受影响；请确认调用环境符合渠道要求。

---

## 参考链接

- 原文档站（致谢）：[https://www.ddshub.cc/faq](https://www.ddshub.cc/faq)
- 同类网关通用说明（英文）：[New API FAQ](https://docs.newapi.pro/zh/docs/support/faq)
