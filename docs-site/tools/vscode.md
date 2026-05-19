---
title: vs code 配置接入
description: 在 Windows 与 macOS 上安装 Codex 并接入 VS Code
---

# vs code 配置接入

本文说明如何在 Windows 和 macOS 上安装 Codex CLI，连接 @TD_BRAND_DISPLAY@ API，并在 VS Code 中使用 Codex 扩展。

## 准备工作

- Node.js 18 或更高版本。
- @TD_BRAND_DISPLAY@ 控制台中创建的 codex 专用 API Key。
- VS Code 已安装。

::: warning 令牌说明
Codex 建议使用 codex 专用令牌组。请不要直接复用 Claude Code 专用令牌。
:::

## Windows

### 1. 安装 Node.js

打开 Node.js 官网下载安装包：

[https://nodejs.org/](https://nodejs.org/)

安装时保持默认选项即可。安装完成后，打开 PowerShell 验证：

```powershell
node --version
npm --version
```

看到版本号说明安装成功。

### 2. 安装 Codex

以管理员身份打开 PowerShell：

```powershell
npm i -g @openai/codex --registry=https://registry.npmmirror.com
```

验证安装：

```powershell
codex --version
```

### 3. 配置 @TD_BRAND_DISPLAY@ API

打开目录：

```text
C:\Users\你的用户名\.codex
```

如果没有 `.codex` 文件夹，就手动创建。

创建 `config.toml`：

```toml
model_provider = "atomflow"
model = "gpt-5.5"

[model_providers.atomflow]
name = "atomflow"
base_url = "@TD_GATEWAY_V1@"
wire_api = "responses"
api_key = "sk-your-api-key"
requires_openai_auth = true
```

将 `sk-your-api-key` 替换成你自己的 @TD_BRAND_DISPLAY@ API Key。

在同一目录下创建 `auth.json`：

```json
{
  "OPENAI_API_KEY": "sk-your-api-key"
}
```

同样将 `sk-your-api-key` 替换成你自己的 API Key。

### 4. 启动 Codex

PowerShell 执行：

```powershell
codex
```

也可以直接带任务启动：

```powershell
codex "帮我写一个 Spring Boot 接口"
```

## macOS

### 1. 安装 Node.js

推荐使用 Node.js 官网安装包：

[https://nodejs.org/](https://nodejs.org/)

安装完成后，打开终端验证：

```bash
node --version
npm --version
```

如果你使用 Homebrew，也可以执行：

```bash
brew install node
```

### 2. 安装 Codex

```bash
npm i -g @openai/codex --registry=https://registry.npmmirror.com
```

验证安装：

```bash
codex --version
```

### 3. 配置 @TD_BRAND_DISPLAY@ API

创建配置目录：

```bash
mkdir -p ~/.codex
cd ~/.codex
```

创建 `config.toml`：

```bash
cat > config.toml <<'EOF'
model_provider = "atomflow"
model = "gpt-5.5"

[model_providers.atomflow]
name = "atomflow"
base_url = "@TD_GATEWAY_V1@"
wire_api = "responses"
api_key = "sk-your-api-key"
requires_openai_auth = true
EOF
```

创建 `auth.json`：

```bash
cat > auth.json <<'EOF'
{
  "OPENAI_API_KEY": "sk-your-api-key"
}
EOF
```

将两个文件里的 `sk-your-api-key` 都替换成你自己的 @TD_BRAND_DISPLAY@ API Key。

### 4. 启动 Codex

```bash
codex
```

也可以直接带任务启动：

```bash
codex "帮我写一个 Spring Boot 接口"
```

## VS Code 使用

1. 打开 VS Code。
2. 进入扩展市场。
3. 搜索并安装 `Codex - OpenAI's coding agent`。
4. 安装完成后重启 VS Code。
5. 打开项目目录，在 Codex 扩展中开始使用。

VS Code 扩展会复用本机 Codex 配置。若扩展无法连接，请先在终端运行 `codex --version` 和 `codex`，确认 CLI 与 `~/.codex` 配置正常。

## 常见问题

### Windows 找不到 `.codex` 目录？

可以手动在用户目录创建 `.codex` 文件夹，也可以先运行一次 `codex`，让工具生成默认目录后再修改配置。

### VS Code 扩展无法使用？

- 确认 Codex CLI 已安装成功。
- 确认 `config.toml` 的 `base_url` 为 `@TD_GATEWAY_V1@`。
- 确认 `auth.json` 中的 `OPENAI_API_KEY` 已替换成真实 API Key。
- 重启 VS Code 后再试。

## 相关页面

- [codex 配置接入](./codex)
- [cc-switch 配置接入](./cc-switch)
