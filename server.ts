import { initChat } from "./index.ts";

Deno.serve(async (req: Request) => {
  // 只处理 POST 请求
  if (req.method !== "POST") {
    return new Response("Only POST method is allowed", { status: 405 });
  }

  try {
    // 获取请求体中的消息内容
    const body = await req.json();
    const message = body.message;

    if (!message) {
      return new Response("Message is required", { status: 400 });
    }

    // 调用 chat.fetchFull() 获取响应
    const chat = await initChat("gpt-4o-mini");
    const response = await chat.fetchFull(message);

    // 返回 JSON 格式的响应
    return new Response(JSON.stringify({ response }), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
});