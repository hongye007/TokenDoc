---
title: "管理多密钥"
source: "https://docs.newapi.pro/zh/docs/api/management/channel-management/channel-multi_key-manage-post"
syncedAt: "2026-05-10T11:18:25.266Z"
---

POST

`/api/channel/multi_key/manage`

## [Request Body](#request-body)

application/json

channel\_id?integer

action?string

Value in`"get_key_status" | "disable_key" | "enable_key" | "delete_key" | "delete_disabled_keys" | "enable_all_keys" | "disable_all_keys"`

key\_index?integer

## [Response Body](#response-body)

```
curl -X POST "https://loading/api/channel/multi_key/manage" \  -H "Content-Type: application/json" \  -d '{}'
```

Empty

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/management/channel-management/channel-multi_key-manage-post)（New API）。本站为离线整理副本，如有出入以官方为准。
