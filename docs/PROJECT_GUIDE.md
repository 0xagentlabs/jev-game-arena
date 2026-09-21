# Jev Game Arena 使用说明

平台采用统一决策管线：游戏规则引擎生成合法动作与启发式评分，Jev `choice()` 在候选动作中做最终选择，服务端再校验动作是否属于候选集。

当前正式支持五子棋、黑白棋、四子棋和井字棋。围棋、中国象棋、军旗在界面中明确标记为 LAB，没有将不完整规则伪装成可玩版本。

密钥由用户在前端填写，仅保存于 `sessionStorage`；也可以配置服务端 `TYPESAFE_API_KEY`。运行及测试命令见项目 README。

## 决策架构

1. 本地规则引擎生成当前局面的全部合法动作。
2. 启发式层识别立即获胜、必须防守、中心控制、角位和翻子收益。
3. Jev 官方 TypeSafe SDK 的 `choice()` 从高价值候选中选择动作并给出理由。
4. 服务端校验 Jev 返回值，只执行候选集中存在的合法动作。

## 链接

- 生产环境：https://jev-game-arena.vercel.app
- GitHub：https://github.com/0xagentlabs/jev-game-arena

## 常见问题

- 页面提示缺少 Key：点击右上角 `SET API KEY`，填入 TypeSafe API Key。
- Key 是否上传保存：不会持久化到平台数据库；浏览器只在当前标签页会话保存。
- Jev 返回异常动作：服务端会拒绝该动作，不会破坏棋局。
