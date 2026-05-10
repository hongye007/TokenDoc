---
title: "功能指南概述"
source: "https://docs.newapi.pro/zh/docs/guide/feature-guide"
syncedAt: "2026-05-10T11:19:57.626Z"
---

## 功能指南概述

New API 功能指南，按角色分为用户指南与管理员指南两部分

New API 是一个统一的 LLM 网关平台，将多个 AI 服务商的接口聚合为标准的 OpenAI 兼容 API，让你通过一个地址访问数十种模型。本指南按角色分为用户指南与管理员指南两部分。

![系统首页](https://docs.newapi.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.b33db84d.png&w=3840&q=75&dpl=dpl_5xWUpQnJ3GSwAKGo6u8mmg9BRqma)

根据账号权限，平台分为三种角色，各自拥有不同的功能范围。

### [普通用户](#普通用户)

注册后的默认角色，可以创建令牌、调用 API、查看个人用量、充值与订阅。

### [管理员（Admin）](#管理员admin)

由 Root 提升的管理角色，在用户权限基础上，可以管理渠道、用户、兑换码、日志、模型与分组。

### [超级管理员（Root）](#超级管理员root)

最高权限角色，在管理员基础上，额外拥有系统全局设置、自定义 OAuth、性能监控等能力。

适用于所有已登录用户，涵盖从注册到日常使用的完整流程。

### [注册与登录](#注册与登录)

支持账号密码及 GitHub、Discord 等多种第三方 OAuth 登录方式。

*   账号密码登录
*   第三方 OAuth 登录
*   忘记密码重置
*   新用户注册流程

[查看详细文档 →](./user/auth)

### [个人设置](#个人设置)

管理账号信息、开启 2FA 双因素认证、绑定 Passkey 无密码登录。

*   修改用户名和密码
*   绑定邮箱地址
*   开启双因素认证（2FA）
*   注册 Passkey 无密码登录
*   绑定第三方账号

[查看详细文档 →](./user/personal-setting)

### [令牌管理](#令牌管理)

创建和管理 API 调用凭证，支持配额限制、模型限制、IP 白名单。

*   创建新令牌
*   配置令牌权限
*   设置配额限制
*   配置模型限制
*   设置 IP 白名单

[查看详细文档 →](./user/token)

### [使用记录](#使用记录)

查看每次 API 调用的模型、Token 消耗、配额扣减等详细记录。

*   查看调用日志
*   搜索与过滤记录
*   数据统计图表
*   配额消耗分析

[查看详细文档 →](./user/log)

### [钱包管理](#钱包管理)

支持在线支付（如支付宝、Stripe）、兑换码充值，以及邀请奖励与账单查看。

*   在线支付充值
*   兑换码充值
*   邀请奖励
*   查看充值记录

[查看详细文档 →](./user/topup)

### [订阅计划](#订阅计划)

按周期购买的套餐，适合有稳定用量需求的用户。

*   查看订阅套餐
*   购买订阅
*   管理自动续费

[查看详细文档 →](https://docs.newapi.pro/zh/docs/guide/feature-guide/user/subscription)

### [模型广场](#模型广场)

浏览可用模型、筛选供应商与计费类型，并查看价格说明。

*   查看模型价格
*   搜索特定模型
*   了解计费规则

[查看详细文档 →](./user/pricing)

### [任务](#任务)

查看和管理异步生成任务的状态和结果。

*   查看任务列表
*   查看任务详情
*   管理任务进度

[查看详细文档 →](./user/task)

适用于 Admin 及 Root 角色，涵盖平台运营与系统配置的全部功能。

### [渠道管理](#渠道管理)

配置 AI 服务商渠道，支持多 Key 轮询、优先级、自动禁用等策略。

*   添加新渠道
*   配置渠道参数
*   渠道测试
*   批量操作
*   多 Key 模式配置

[查看详细文档 →](https://docs.newapi.pro/zh/docs/guide/feature-guide/admin/channel)

### [用户管理](#用户管理)

查看和管理所有用户，修改角色、分组、配额，启用或禁用账号。

*   查看用户列表
*   编辑用户信息
*   修改用户角色
*   调整用户配额
*   搜索用户

[查看详细文档 →](https://docs.newapi.pro/zh/docs/guide/feature-guide/admin/user)

### [兑换码管理](#兑换码管理)

批量生成和管理配额兑换码。

*   批量生成兑换码
*   设置兑换码面值
*   导出兑换码
*   查看使用状态

[查看详细文档 →](https://docs.newapi.pro/zh/docs/guide/feature-guide/admin/redemption)

### [日志管理](#日志管理)

查看全站 API 调用日志和用户操作记录。

*   查看全站日志
*   高级筛选
*   数据统计分析

[查看详细文档 →](https://docs.newapi.pro/zh/docs/guide/feature-guide/admin/log)

### [订阅管理](#订阅管理)

创建和管理订阅套餐。

*   创建订阅套餐
*   编辑套餐信息
*   管理订阅用户

[查看详细文档 →](https://docs.newapi.pro/zh/docs/guide/feature-guide/admin/subscription)

### [模型管理](#模型管理)

配置模型定价和可用性。

*   设置模型倍率
*   启用或禁用模型
*   批量修改定价

[查看详细文档 →](https://docs.newapi.pro/zh/docs/guide/feature-guide/admin/model)

### [分组管理](#分组管理)

创建用户分组，实现差异化计费和渠道分配。

*   创建用户分组
*   配置分组倍率
*   分配渠道

[查看详细文档 →](https://docs.newapi.pro/zh/docs/guide/feature-guide/admin/group)

### [系统设置（Root 专属）](#系统设置root-专属)

Root 专属全局配置中心，涵盖站点信息、计费规则、支付、OAuth 等参数。

*   站点基本信息
*   计费规则配置
*   支付方式配置
*   邮件服务配置
*   注册与登录设置

[查看详细文档 →](https://docs.newapi.pro/zh/docs/guide/feature-guide/admin/system-setting)

### [系统高级配置（Root 专属）](#系统高级配置root-专属)

系统设置的详细配置选项，包含支付、限流、聊天、绘图等高级功能。

*   支付设置（EPay、Stripe）
*   限流设置
*   倍率设置
*   聊天设置
*   绘图设置
*   数据看板设置
*   模型设置
*   运营设置

[查看详细文档 →](https://docs.newapi.pro/zh/docs/guide/feature-guide/admin/system-setting-advanced)

### [自定义 OAuth（Root 专属）](#自定义-oauthroot-专属)

配置自定义 OAuth 登录提供商。

*   添加 OAuth 提供商
*   配置 OAuth 参数
*   测试 OAuth 登录

[查看详细文档 →](https://docs.newapi.pro/zh/docs/guide/feature-guide/admin/custom-oauth)

### [性能监控（Root 专属）](#性能监控root-专属)

查看系统性能指标和运行状态。

*   查看系统负载
*   监控渠道性能
*   分析响应时间

[查看详细文档 →](https://docs.newapi.pro/zh/docs/guide/feature-guide/admin/performance)

### [文档配置（Root 专属）](#文档配置root-专属)

配置文档站点的显示内容。

*   自定义文档内容
*   配置文档链接

[查看详细文档 →](https://docs.newapi.pro/zh/docs/guide/feature-guide/admin/docs-config)

这篇文档对您有帮助吗？

最后更新于

---

> **来源**：[官方文档](https://docs.newapi.pro/zh/docs/guide/feature-guide)（New API）。本站为离线整理副本，如有出入以官方为准。
