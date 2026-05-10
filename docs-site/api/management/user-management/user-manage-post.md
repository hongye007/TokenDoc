---
title: "管理用户状态"
source: "https://docs.newapi.pro/zh/docs/api/management/user-management/user-manage-post"
syncedAt: "2026-05-10T11:17:45.750Z"
---

POST

`/api/user/manage`

## [Request Body](#request-body)

application/json

id?integer

action?string

Value in`"disable" | "enable" | "delete" | "promote" | "demote"`

## [Response Body](#response-body)

```
curl -X POST "https://loading/api/user/manage" \  -H "Content-Type: application/json" \  -d '{}'
```

Empty

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/management/user-management/user-manage-post)（New API）。本站为离线整理副本，如有出入以官方为准。
