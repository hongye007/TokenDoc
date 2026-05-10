---
title: "更新用户设置"
source: "https://docs.newapi.pro/zh/docs/api/management/user-management/user-setting-put"
syncedAt: "2026-05-10T11:17:57.906Z"
---

🔐 需要登录（User权限）

PUT

`/api/user/setting`

## [Request Body](#request-body)

application/json

notify\_type?string

quota\_warning\_threshold?number

webhook\_url?string

notification\_email?string

## [Response Body](#response-body)

```
curl -X PUT "https://loading/api/user/setting" \  -H "Content-Type: application/json" \  -d '{}'
```

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/management/user-management/user-setting-put)（New API）。本站为离线整理副本，如有出入以官方为准。
