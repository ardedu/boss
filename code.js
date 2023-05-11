const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("chat message", (msg) => {
    console.log(`Message received: ${msg}`);
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
const socket = io();

const messages = document.getElementById("show_message");
const chatForm = document.getElementById("chat_form");
const messageInput = document.getElementById("message");

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = messageInput.value;
  socket.emit("chat message", message);
  messageInput.value = "";
});

socket.on("chat message", (msg) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = msg;
  show_message.appendChild(messageElement);
});
