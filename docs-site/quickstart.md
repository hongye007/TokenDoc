---
title: 极速入门
outline: false
aside: false
---

<div class="td-flow">

<div class="td-flow__hero">
  <h1>快速上手指南</h1>
  <p>完成网关部署并打开控制台后，按下列四步完成 <strong>注册登录 → 充值余额 → 创建令牌 → 牛刀小试</strong>，即可发起第一次 API 请求。</p>
</div>

<nav class="td-stepper" aria-label="入门步骤">
  <a class="td-stepper__item" href="#flow-s1">
    <span class="td-stepper__num">1</span>
    <span class="td-stepper__label">注册登录</span>
  </a>
  <a class="td-stepper__item" href="#flow-s2">
    <span class="td-stepper__num">2</span>
    <span class="td-stepper__label">充值余额</span>
  </a>
  <a class="td-stepper__item" href="#flow-s3">
    <span class="td-stepper__num">3</span>
    <span class="td-stepper__label">创建令牌</span>
  </a>
  <a class="td-stepper__item" href="#flow-s4">
    <span class="td-stepper__num">4</span>
    <span class="td-stepper__label">牛刀小试</span>
  </a>
</nav>

<section class="td-flow-section" aria-labelledby="flow-s1">
  <div class="td-flow-section__head">
    <div class="td-flow-section__icon"><span class="td-icon" aria-hidden="true">account_circle</span></div>
    <div class="td-flow-section__titles">
      <span class="td-label">Step 01</span>
      <h2 id="flow-s1">注册与登录</h2>
    </div>
  </div>
  <div class="td-flow-panel">
    <div class="td-flow-actions td-flow-actions--lead">
      <a class="td-btn td-btn--primary" href="https://atomflow.vip/register" target="_blank" rel="noopener noreferrer">注册入口</a>
      <a class="td-btn" href="https://atomflow.vip/login" target="_blank" rel="noopener noreferrer">登录入口</a>
      <a class="td-flow-inline-link" href="./settings/user/auth">用户指南 · 登录注册</a>
    </div>
    <div class="td-flow-shots" role="group" aria-label="控制台注册与登录界面参考">
      <figure class="td-flow-shot">
        <figcaption>注册</figcaption>
        <img src="/quickstart/register.png" alt="原子流动控制台：注册页界面" width="1024" height="498" loading="lazy" decoding="async" />
      </figure>
      <figure class="td-flow-shot">
        <figcaption>登录</figcaption>
        <img src="/quickstart/login.png" alt="原子流动控制台：登录页界面" width="1024" height="376" loading="lazy" decoding="async" />
      </figure>
    </div>
  </div>
</section>

<section class="td-flow-section" aria-labelledby="flow-s2">
  <div class="td-flow-section__head">
    <div class="td-flow-section__icon"><span class="td-icon" aria-hidden="true">account_balance_wallet</span></div>
    <div class="td-flow-section__titles">
      <span class="td-label">Step 02</span>
      <h2 id="flow-s2">充值余额</h2>
    </div>
  </div>
  <div class="td-flow-panel">
    <div class="td-flow-actions td-flow-actions--lead">
      <a class="td-btn td-btn--primary" href="https://atomflow.vip/console/topup" target="_blank" rel="noopener noreferrer">充值入口</a>
      <a class="td-flow-inline-link" href="./settings/user/topup">用户指南 · 钱包管理</a>
    </div>
    <div class="td-flow-shots td-flow-shots--single" role="group" aria-label="控制台钱包与充值界面参考">
      <figure class="td-flow-shot">
        <figcaption>钱包管理 · 账户充值</figcaption>
        <img src="/quickstart/topup.png" alt="原子流动控制台：钱包管理页，侧栏进入钱包管理并选择充值方式" width="1024" height="420" loading="lazy" decoding="async" />
      </figure>
    </div>
  </div>
</section>

<section class="td-flow-section" aria-labelledby="flow-s3">
  <div class="td-flow-section__head">
    <div class="td-flow-section__icon"><span class="td-icon" aria-hidden="true">vpn_key</span></div>
    <div class="td-flow-section__titles">
      <span class="td-label">Step 03</span>
      <h2 id="flow-s3">创建令牌</h2>
    </div>
  </div>
  <div class="td-flow-panel">
    <div class="td-flow-actions td-flow-actions--lead">
      <a class="td-btn td-btn--primary" href="https://atomflow.vip/console/token" target="_blank" rel="noopener noreferrer">令牌管理</a>
      <a class="td-flow-inline-link" href="./settings/user/token">用户指南 · 令牌管理</a>
      <a class="td-flow-inline-link" href="./api/">API 参考</a>
    </div>
    <div class="td-flow-shots td-flow-shots--single" role="group" aria-label="控制台令牌管理界面参考">
      <figure class="td-flow-shot">
        <figcaption>令牌管理</figcaption>
        <img src="/quickstart/token.png" alt="原子流动控制台：令牌管理页，添加令牌、复制密钥与聊天应用集成" width="1024" height="489" loading="lazy" decoding="async" />
      </figure>
    </div>
  </div>
</section>

<section class="td-flow-section" aria-labelledby="flow-s4">
  <div class="td-flow-section__head">
    <div class="td-flow-section__icon"><span class="td-icon" aria-hidden="true">science</span></div>
    <div class="td-flow-section__titles">
      <span class="td-label">Step 04</span>
      <h2 id="flow-s4">牛刀小试</h2>
    </div>
  </div>
  <div class="td-flow-panel">
    <p>在终端用 cURL 调用 <code>/v1/chat/completions</code>，将 <code>Authorization</code> 中的密钥换成你在上一步创建的令牌即可。</p>
    <div class="td-code-panel">
      <div class="td-code-panel__bar"><span>示例 · cURL</span></div>
      <pre><code>curl https://atomflow.vip/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-your-api-key" \
  -d '{"model":"gpt-5.4-mini","messages":[{"role":"user","content":"Hello!"}]}'</code></pre>
    </div>
    <QuickStartChatPlayground />
  </div>
</section>

</div>
