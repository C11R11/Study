// Manage Socket.IO server
import {Server} from "socket.io";
import {PTY} from "./PTYService";

export class SocketService {
  socket: any;
  pty: any;
  constructor() {
    this.socket = null;
    this.pty = null;
  }

  attachServer(server: any) {
    if (!server) {
      throw new Error("Server not found...");
    }

    const io = new Server(server, { cors: {
      origin: ["http://127.0.0.1:5500", "http://localhost:8080"],
      methods: ["GET", "POST"]
    }})
    console.log("Created socket server. Waiting for client connection.");
    // "connection" event happens when any client connects to this io instance.
    io.on("connection", (socket: { id: any; } ) => {
      console.log("Client connect to socket.", socket.id);

      this.socket = socket;

      this.socket.on("disconnect", () => {
        console.log("Disconnected Socket: ", socket.id);
      });

      // Create a new pty service when client connects.
      this.pty = new PTY(this.socket);

      // Attach any event listeners which runs if any event is triggered from socket.io client
      // For now, we are only adding "input" event, where client sends the strings you type on terminal UI.
      this.socket.on("input", (input: string) => {
        //Runs this event function socket receives "input" events from socket.io client
        console.log("new input->", input)
        this.pty.write(input);
      });
    });
  }
}
