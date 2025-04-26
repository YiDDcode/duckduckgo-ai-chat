# duckduckgo-ai-chat

![JSR Version](https://img.shields.io/jsr/v/%40mumulhl/duckduckgo-ai-chat)

English | [中文](./README_CN.md)

duckduckgo-ai-chat provides the [Duckduckgo AI Chat](https://duckduckgo.com/aichat) API for JavaScript/TypeScript, which can use o3-mini for free.

## Notice

**Duckduckgo has made cracking much harder, and I am unable to maintain this project.**

## Install

```sh
npx jsr add @mumulhl/duckduckgo-ai-chat
# or
pnpm dlx jsr add @mumulhl/duckduckgo-ai-chat
# or
yarn dlx jsr add @mumulhl/duckduckgo-ai-chat
# or
deno add jsr:@mumulhl/duckduckgo-ai-chat
```

## Usage example

```javascript
import { initChat } from "@mumulhl/duckduckgo-ai-chat";

// Initialize, optional models are gpt-4o-mini, claude-3-haiku, llama, mixtral, o3-mini
const chat = await initChat("o3-mini");

// Fetch the full reply in one go
let message = await chat.fetchFull("Hello");
console.log(message)

// Redo
chat.redo()
message = await chat.fetchFull("Hello");
console.log(message)

// Fetch the streamed reply
const stream = chat.fetchStream("Hello");
for await (let data of stream) {
  console.log(data)
}
```

## Star History

Poor star count...

[![Star History Chart](https://api.star-history.com/svg?repos=mumu-lhl/duckduckgo-ai-chat&type=Date)](https://star-history.com/#mumu-lhl/duckduckgo-ai-chat&Date)
