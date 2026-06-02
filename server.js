const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("✅ Client connected");

  socket.on("message", (raw) => {
    let data;

    // 1. parse safely
    try {
      data = JSON.parse(raw.toString());
    } catch (err) {
      console.log("❌ Invalid message format");
      return;
    }

    // 2. handle message types
    if (data.type === "message") {
      console.log(`📩 ${data.name}: ${data.message}`);

      const payload = JSON.stringify({
        type: "message",
        name: data.name,
        message: data.message,
      });

      // 3. broadcast
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(payload);
        }
      });
    }
  });

  socket.on("close", () => {
    console.log("❌ Client disconnected");
  });
});

console.log("🚀 Server running on ws://localhost:8080");