---
title: "鉴权体系说明（Auth）"
source: "https://docs.newapi.pro/zh/docs/api/management/auth"
syncedAt: "2026-05-10T11:17:15.254Z"
---

管理接口

后台管理接口鉴权方式与权限级别说明

后台管理接口采用多级鉴权机制，常见为：**公开**、**用户**、**管理员**、**Root**。

### [Session](#session)

通过登录接口获取 Session：

*   `POST /api/user/login`

### [Access Token（推荐）](#access-token推荐)

在请求头中携带：

```
Authorization: Bearer {token}
```

Token 可在「个人设置 - 安全设置 - 系统访问令牌」中生成。

部分接口要求携带用户标识请求头：

```
New-Api-User: {user_id}
```

其中 `{user_id}` 必须与当前登录用户匹配。

*   **公开（Public）**：无需鉴权
*   **用户（User）**：需要登录或 Access Token
*   **管理员（Admin）**：需要管理员权限
*   **Root**：最高权限

这篇文档对您有帮助吗？

最后更新于

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/api/management/auth)（New API）。本站为离线整理副本，如有出入以官方为准。
