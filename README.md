# Jev Game Arena

独立的 Jev 人机对战小游戏平台。当前可完整游玩五子棋、黑白棋、四子棋和井字棋；围棋、中国象棋、军旗位于 Strategy Lab，待各自完整规则引擎通过测试后开放。

- 在线体验：https://jev-game-arena.vercel.app
- 源码仓库：https://github.com/0xagentlabs/jev-game-arena

## 本地运行

```bash
pnpm install
pnpm dev
```

在页面中填写 TypeSafe API Key，密钥仅保存在当前浏览器 `sessionStorage`，经 HTTPS 发送到服务端代理。

## 验证

```bash
pnpm lint
pnpm test
pnpm build
```
