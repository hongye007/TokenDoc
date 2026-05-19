---
title: claude 配置接入
description: 使用多品牌网关接入 Claude Code
---

# claude 配置接入

本文说明如何把 Claude Code 接入 @TD_BRAND_DISPLAY@。开始前请先完成 Node.js 环境安装，并在 @TD_BRAND_DISPLAY@ 控制台创建 Claude Code 专用令牌。

## 首次启动前处理初始化确认

使用中转渠道时，Claude Code 首次启动可能会尝试连接官方服务做初始化确认，并出现类似错误：

```text
Welcome to Claude Code
Unable to connect to Anthropic services
Failed to connect to api.anthropic.com: ERR_BAD_REQUEST
```

推荐使用 cc-switch 处理：打开 cc-switch，进入设置，开启「跳过 Claude Code 初次安装确认」。

也可以手动修改用户目录下的 `~/.claude.json`，在顶层添加：

```json
{
  "hasCompletedOnboarding": true
}
```

::: warning 注意 JSON 格式
如果文件里已经有其他顶层字段，请在上一个字段后补英文逗号，再添加 `hasCompletedOnboarding`，否则 Claude Code 可能无法读取配置。
:::

## 推荐方式：使用 cc-switch

1. 打开 cc-switch。
2. 进入「Claude」标签页。
3. 点击新增配置。
4. 填写 @TD_BRAND_DISPLAY@ 提供商信息。

| 字段 | 填写内容 |
| --- | --- |
| 提供商名称 | `@TD_BRAND_DISPLAY@ Claude` |
| API Base URL | `@TD_API_GATEWAY_ORIGIN@` |
| API Key | Claude Code 专用令牌 |
| 模型 | 按需选择可用 Claude 模型 |

保存后，将该配置设为当前使用。重新启动 Claude Code 后，新配置即可生效。

## 手动安装 Claude Code

### Windows

PowerShell：

```powershell
irm https://claude.ai/install.ps1 | iex
```

CMD：

```cmd
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

验证安装：

```powershell
claude --version
```

### macOS

Homebrew：

```bash
brew install --cask claude-code
```

或使用安装脚本：

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

验证安装：

```bash
claude -v
```

### Linux

```bash
curl -fsSL https://claude.ai/install.sh | bash
claude -v
```

::: tip 安装建议
如果官方提供 Native 安装方式，优先使用 Native 安装。npm 安装渠道可能存在版本滞后。
:::

## 手动配置环境变量

如果不使用 cc-switch，可以手动设置 Claude Code 需要的环境变量。

### Windows PowerShell

```powershell
[Environment]::SetEnvironmentVariable("ANTHROPIC_AUTH_TOKEN", "sk-your-api-key", "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "@TD_API_GATEWAY_ORIGIN@", "User")
```

### Windows CMD

```cmd
setx ANTHROPIC_AUTH_TOKEN "sk-your-api-key"
setx ANTHROPIC_BASE_URL "@TD_API_GATEWAY_ORIGIN@"
```

### macOS / Linux

Bash：

```bash
echo 'export ANTHROPIC_AUTH_TOKEN="sk-your-api-key"' >> ~/.bash_profile
echo 'export ANTHROPIC_BASE_URL="@TD_API_GATEWAY_ORIGIN@"' >> ~/.bash_profile
source ~/.bash_profile
```

Zsh：

```bash
echo 'export ANTHROPIC_AUTH_TOKEN="sk-your-api-key"' >> ~/.zshrc
echo 'export ANTHROPIC_BASE_URL="@TD_API_GATEWAY_ORIGIN@"' >> ~/.zshrc
source ~/.zshrc
```

将 `sk-your-api-key` 替换为你在 @TD_BRAND_DISPLAY@ 创建的 Claude Code 专用令牌。设置完成后，重启终端并在项目目录运行：

```bash
claude
```

## 常见问题

### 提示找不到 `claude` 命令

- 确认 Claude Code 已安装成功。
- 检查终端 PATH。
- 关闭并重新打开终端。

### 连接失败

- 确认 `ANTHROPIC_BASE_URL` 为 `@TD_API_GATEWAY_ORIGIN@`。
- 确认 API Key 是 @TD_BRAND_DISPLAY@ 的 Claude Code 专用令牌。
- 检查账户余额和令牌状态。

## 相关页面

- [cc-switch 配置接入](./cc-switch)
- [codex 配置接入](./codex)
