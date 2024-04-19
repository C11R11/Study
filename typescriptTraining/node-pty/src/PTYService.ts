const os = require("os");
const pty = require("node-pty");

export class PTY {
  shell: string;
  ptyProcess: any;
  socket: any;
  constructor(socket: any) {
    this.shell = os.platform() === "win32" ? "cmd.exe" : "bash";
    this.ptyProcess = pty.spawn(this.shell, [], {
      name: "xterm-color",
      cwd: process.env.HOME, // Which path should terminal start
      env: process.env // Pass environment variables
    });
    this.socket = socket;

    console.log("shell ->", this.shell)

    // Initialize PTY process.
    this.startPtyProcess();
  }

  /**
   * Spawn an instance of pty with a selected shell.
   */
  startPtyProcess() {

    this.ptyProcess.onData((data: any) => {
      // Whenever terminal generates any data, send that output to socket.io client to display on UI
      console.log("out---->", data + "<---")
     // this.sendToClient(data);
     this.socket.emit("output", data);
    })

    // Add a "data" event listener.
    // this.ptyProcess.on("data", (data: any) => {
    //   // Whenever terminal generates any data, send that output to socket.io client to display on UI
    //   //console.log("data---->", data + "<---")
    //   this.sendToClient(data);
    // });
  }

  /**
   * Use this function to send in the input to Pseudo Terminal process.
   * @param {*} data Input from user like command sent from terminal UI
   */

  write(data: string) {
    console.log("writing into pty", data, typeof(data))
    this.ptyProcess.write(data.toString()+"\r");
    //this.ptyProcess.write("pwd\r");
  }

  sendToClient(data: any) {
   // console.log("sendToClient", data)
    // Emit data to socket.io client in an event "output"
    this.socket.emit("output", data);
  }
}