import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {
  console.log(`One user is connected ${socket.id}`);
  socket.on("chatmessage", (msg) => {
    console.log("message: " + msg);
    io.emit("chatmessage", { msg });
  });
});

server.listen(3000, () => {
  console.log("App is running on port 3000");
});
