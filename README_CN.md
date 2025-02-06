# duckduckgo-ai-chat

![JSR Version](https://img.shields.io/jsr/v/%40mumulhl/duckduckgo-ai-chat)

[English](./README.md) | 中文

duckduckgo-ai-chat 为 JavaScript/TypeScript 提供 [Duckduckgo AI Chat](https://duckduckgo.com/aichat) API，可以免费使用 o3-mini。

## 安装

```sh
npx jsr add @mumulhl/duckduckgo-ai-chat
# or
pnpm dlx jsr add @mumulhl/duckduckgo-ai-chat
# or
yarn dlx jsr add @mumulhl/duckduckgo-ai-chat
# or
deno add jsr:@mumulhl/duckduckgo-ai-chat
```

## 使用示例

```javascript
import { initChat } from "@mumulhl/duckduckgo-ai-chat";

// 初始化，可选模型有 gpt-4o-mini, claude-3-haiku, llama, mixtral, o3-mini
const chat = await initChat("o3-mini");

// 一次性获取完整的回复
let message = await chat.fetchFull("Hello");
console.log(message)

// 重新回复
chat.redo()
message = await chat.fetchFull("Hello");
console.log(message)

// 获取流式回复
const stream = chat.fetchStream("Hello");
for await (let data of stream) {
  console.log(data)
}
```

## Star History

可怜的 star 数...

[![Star History Chart](https://api.star-history.com/svg?repos=mumu-lhl/duckduckgo-ai-chat&type=Date)](https://star-history.com/#mumu-lhl/duckduckgo-ai-chat&Date)
