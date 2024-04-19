import { Server } from "socket.io";

//you need to add your server adress in case of a cors error
const io = new Server({
  cors: {
    origin: ["http://127.0.0.1:5500", "http://localhost:8080"],
    methods: ["GET", "POST"]
  }
});

io.on("connection", function(socket: any) {
    console.log("a user connected");
    socket.emit("chat message", "world");
    socket.emit("info", {
        userID: socket.id,
        username: socket.username,
      });
    socket.on("message", function(message: any) {
      console.log("New message -> " + message);
      // echo the message back down the
      // websocket connection
      socket.broadcast.emit("server-reply", "->" + message );
    });

    socket.on("input", function(message: any) {
      console.log("New input -> " + message);
      socket.emit("output", "Proccesed :)");
    });

    socket.on("bye", function(message: any) {
        console.log("bye meesage")
        io.close()
        process.exit();
        return
      });
  });

  io.on("close", function()
  {
    console.log("closing....")
  })


console.log("listen 3000")
io.listen(3000);