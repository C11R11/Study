import { existsSync } from 'fs';
import { WebSocketServer } from 'ws';

async function socketTest() {
  return new Promise(function (resolve, reject) {
  const wss = new WebSocketServer({ port: 6789 });

  console.log("socket server up")

  const handlerConn = function connection(ws:any) {
    /* ws.on('message', function message(data) {
      console.log('received: %s', data);
      ws.send('received: %s' + data);
      ws.close()
    }); */

    ws.send('something');

    const handler = function message(data:any)
    {
      console.log('received: %s', data);
      ws.send('received: %s' + data);
      ws.removeListener("message", handler)
      wss.removeListener("connection", handlerConn);
      ws.isAlive = false
      ws.close()
    }

    ws.addEventListener("message", handler, {once: true} )

    ws.on('close', function close() {
      console.log('disconnected');
      ws.terminate();
    });
  }

  wss.addListener("connection", handlerConn)
  //wss.on('connection', handlerConn);
  })
}

(async () => {
  console.log("before socketTest")
  await socketTest()
  console.log("after socketTest ")
})()