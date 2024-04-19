import { io } from "socket.io-client";
//import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

//Here is needed to have a socket io server ready (websockets folder, index_socket_io_alone.ts)
const serverAddress = "http://localhost:3000";

function connectToSocket(serverAddress: string) {
  return new Promise(res => {
    const socket = io(serverAddress);

    socket.on('chat message', function(msg) {
        var item = document.createElement('li');
        item.textContent = msg;
        document.body.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
      });

    res(socket);
  });
}

function start() {
  const container = document.getElementById("terminal-container");

  connectToSocket(serverAddress).then(socket => {
    console.log("connected to server")
  });
}

// Better to start on DOMContentLoaded. So, we know terminal-container is loaded
start();
