---
title: 其他工具配置接入
description: 通过令牌管理导入常见工具配置
---

# 其他工具配置接入

如果你使用 Cherry Studio、AionUI、流畅阅读、DeepChat、Lobe Chat、AI as Workspace、AMA 问天、OpenCat 等工具，建议优先通过 @TD_BRAND_DISPLAY@ 控制台的一键导入功能生成配置。

## 推荐方式：导入平台配置

1. 进入 @TD_BRAND_DISPLAY@ 控制台。
2. 打开「令牌管理」。
3. 找到要使用的令牌。
4. 点击「聊天」按钮旁边的下箭头。
5. 在下拉列表中选择对应导入平台，例如 Cherry Studio、AionUI、DeepChat 或 OpenCat。
6. 按弹窗提示完成配置导入。

导入后，打开对应工具检查 API 地址、模型和密钥是否已经自动填入。不同工具的界面名称可能略有差异，但入口都在「聊天」按钮旁的下拉菜单中。

## 常见工具

- Cherry Studio
- AionUI
- 流畅阅读
- CC Switch
- DeepChat
- Lobe Chat 官方示例
- AI as Workspace
- AMA 问天
- OpenCat

## 手动配置参考

如果工具不支持一键导入，可按以下通用信息手动填写：

| 字段 | 填写内容 |
| --- | --- |
| API Base URL / 接口地址 | `@TD_GATEWAY_V1@` |
| API Key / 密钥 | 令牌管理中复制的 `sk-...` 密钥 |
| 模型 | 按工具支持情况选择可用模型 |

部分 Claude 兼容工具可能需要填写网关根地址：

```text
@TD_API_GATEWAY_ORIGIN@
```

如果工具要求 OpenAI 兼容接口，一般填写：

```text
@TD_GATEWAY_V1@
```

## 遇到问题

如果有其他配置问题，请加入客服群联系咨询。

| 联系方式 | 信息 |
| --- | --- |
| QQ 客服群 | `@TD_QQ_GROUP@` |

## 相关页面

- [cc-switch 配置接入](./cc-switch)
- [codex 配置接入](./codex)
- [vs code 配置接入](./vscode)
