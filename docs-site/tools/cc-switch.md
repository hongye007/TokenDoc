---
title: cc-switch 配置接入
description: 使用 cc-switch 管理多品牌的 Claude Code 与 Codex 配置
---

# cc-switch 配置接入

cc-switch 是一个跨平台的 AI CLI 配置管理工具，可集中管理 Claude Code、Codex、Gemini CLI 等工具的提供商配置。接入 @TD_BRAND_DISPLAY@ 后，可以用图形界面保存 API Key、切换 Base URL，并减少手动修改环境变量或配置文件的步骤。

## 获取工具

| 资源 | 地址 |
| --- | --- |
| GitHub 发布页 | [cc-switch/releases](https://github.com/farion1231/cc-switch/releases) |
| 官方文档 | [ccswitch.lovable.app](https://ccswitch.lovable.app) |

## 安装方式

### Windows

1. 打开 [Releases](https://github.com/farion1231/cc-switch/releases) 页面。
2. 下载最新的 `.msi` 安装器并按提示安装。
3. 如果不想安装，也可以下载 `.zip` 便携版，解压后运行 `cc-switch.exe`。

### macOS

推荐使用 Homebrew：

```bash
brew tap farion1231/ccswitch
brew install --cask cc-switch
```

也可以从 Releases 页面下载 `.dmg`，打开后将应用拖入「应用程序」。

### Linux

Debian/Ubuntu 可下载 `.deb` 后安装：

```bash
sudo dpkg -i cc-switch_*.deb
sudo apt-get install -f
```

AppImage 版本可直接授权运行：

```bash
chmod +x cc-switch_*.AppImage
./cc-switch_*.AppImage
```

Arch Linux 可通过 AUR 安装：

```bash
paru -S cc-switch-bin
# 或
yay -S cc-switch-bin
```

## 一键导入配置（推荐）

在 @TD_BRAND_DISPLAY@ 控制台可以直接生成 cc-switch 配置，适合大多数用户。

1. 进入「令牌管理」。
2. 找到要接入的令牌，点击「聊天」按钮旁边的下拉按钮。
3. 在应用列表中选择「CC Switch」。
4. 选择导入配置类型，例如 Claude、Codex 或 Gemini。
5. 填写配置名称和主模型。
6. 点击打开或导入到 CC Switch，并按提示完成保存。

导入完成后，在 cc-switch 中启用该配置，再重新启动对应 CLI 工具即可生效。

## 手动配置

在 cc-switch 中新增提供商时，建议按目标工具分别创建配置。

### Claude Code 配置

| 字段 | 填写内容 |
| --- | --- |
| 提供商名称 | `@TD_BRAND_DISPLAY@ Claude` |
| API Base URL | `@TD_API_GATEWAY_ORIGIN@` |
| API Key | 在 @TD_BRAND_DISPLAY@ 控制台创建的 Claude Code 专用令牌 |
| 模型 | 按需选择可用 Claude 模型 |

### Codex 配置

| 字段 | 填写内容 |
| --- | --- |
| 提供商名称 | `@TD_BRAND_DISPLAY@ Codex` |
| Base URL | `@TD_GATEWAY_V1@` |
| API Key | 在 @TD_BRAND_DISPLAY@ 控制台创建的 codex 专用令牌 |
| Model | 按需选择可用的 GPT 模型，例如 `gpt-5.4` |

::: warning 注意
Claude Code 与 Codex 建议使用不同令牌组。创建密钥时请按工具用途选择对应分组，避免配置正确但调用失败。

其他工具配置类似。
:::

## 启用手动配置

1. 在 cc-switch 的配置列表中选择刚创建的 @TD_BRAND_DISPLAY@ 配置。
2. 点击启用或设为当前使用。
3. 关闭并重新启动对应 CLI 工具，让新配置生效。

cc-switch 也支持系统托盘快速切换：右键点击托盘图标，选择目标工具分类，再选择要启用的提供商配置。

## 常用功能

- API 端点测速：比较不同提供商的延迟与可用性。
- 配置备份与恢复：修改配置前自动留存历史版本。
- MCP 服务器管理：集中维护 Claude Code 等工具的 MCP 配置。
- 环境变量冲突检测：减少旧变量覆盖新配置的问题。

## 相关页面

- [claude 配置接入](./claude-code)
- [codex 配置接入](./codex)
