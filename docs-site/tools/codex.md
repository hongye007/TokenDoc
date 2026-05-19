---
title: codex 配置接入
description: 使用多品牌网关接入 Codex CLI
---

# codex 配置接入

本文说明如何把 Codex CLI 接入 @TD_BRAND_DISPLAY@。开始前请先安装 Node.js，并在 @TD_BRAND_DISPLAY@ 控制台创建 codex 专用令牌。

## 推荐方式：使用 cc-switch

使用 cc-switch 可以自动生成 Codex 所需的 `~/.codex/config.toml` 与认证配置。

1. 打开 cc-switch。
2. 进入「Codex」标签页。
3. 点击新增配置。
4. 填写 @TD_BRAND_DISPLAY@ 提供商信息。

| 字段 | 填写内容 |
| --- | --- |
| 提供商名称 | `@TD_BRAND_DISPLAY@ Codex` |
| Base URL | `@TD_GATEWAY_V1@` |
| API Key | codex 专用令牌 |
| Model | 按需选择可用 GPT 模型，例如 `gpt-5.4` |

保存并启用后，重启 Codex CLI 即可生效。

::: warning 注意
Codex 与 Claude Code 的令牌不通用。请为 Codex 单独创建 codex 令牌组密钥。
:::

## 安装 Codex CLI

```bash
npm install -g @openai/codex@latest
codex --version
```

Windows 上建议使用管理员权限打开 PowerShell 或 CMD 后执行安装命令。

## 手动配置

如果不使用 cc-switch，可以手动创建 Codex 配置。

### Windows

创建配置目录：

```powershell
mkdir %USERPROFILE%\.codex
cd %USERPROFILE%\.codex
```

创建 `config.toml`：

```toml
model_provider = "atomflow"
model = "gpt-5.4"
model_reasoning_effort = "xhigh"
disable_response_storage = true
approval_policy = "on-request"
sandbox_mode = "danger-full-access"
model_supports_reasoning_summaries = true

[model_providers.atomflow]
name = "atomflow"
base_url = "@TD_GATEWAY_V1@"
wire_api = "responses"
requires_openai_auth = true
```

创建 `auth.json`：

```json
{
  "OPENAI_API_KEY": "sk-your-api-key"
}
```

### macOS / Linux

创建配置目录：

```bash
mkdir -p ~/.codex
cd ~/.codex
```

写入 `config.toml`：

```bash
cat > config.toml <<'EOF'
model_provider = "atomflow"
model = "gpt-5.4"
model_reasoning_effort = "xhigh"
disable_response_storage = true
approval_policy = "on-request"
sandbox_mode = "danger-full-access"
model_supports_reasoning_summaries = true

[model_providers.atomflow]
name = "atomflow"
base_url = "@TD_GATEWAY_V1@"
wire_api = "responses"
requires_openai_auth = true
EOF
```

写入 `auth.json`：

```bash
cat > auth.json <<'EOF'
{
  "OPENAI_API_KEY": "sk-your-api-key"
}
EOF
```

请将 `sk-your-api-key` 替换为你在 @TD_BRAND_DISPLAY@ 控制台创建的 codex 专用令牌。

## 启动使用

在项目目录运行：

```bash
codex
```

首次运行前建议确认：

- `config.toml` 中的 `base_url` 是 `@TD_GATEWAY_V1@`。
- `auth.json` 中的 `OPENAI_API_KEY` 已替换成真实密钥。
- 当前账户余额充足，令牌状态正常。

## 常见问题

### 配置文件放在哪里？

- Windows：`%USERPROFILE%\.codex\`
- macOS / Linux：`~/.codex/`

### 为什么 Claude Code 的密钥不能直接用于 Codex？

两类工具使用的令牌组和上游协议不同。为避免鉴权或路由失败，请在 @TD_BRAND_DISPLAY@ 控制台为 Codex 创建专用令牌。

## 相关页面

- [cc-switch 配置接入](./cc-switch)
- [claude 配置接入](./claude-code)
