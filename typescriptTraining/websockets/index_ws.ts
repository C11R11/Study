import { WebSocketServer } from 'ws';

function socketTest() {
  const wss = new WebSocketServer({ port: 6789 });

  console.log("socket server up")

  wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
      console.log('received: %s', data);
      ws.send('received: %s' + data);
      ws.close()
    });

    ws.send('something');

    ws.on('close', function close() {
      console.log('disconnected');
      process.exit()
    });
  });
}

(() => {
  console.log("before socketTest")
  socketTest()
  console.log("after socketTest ")
})()