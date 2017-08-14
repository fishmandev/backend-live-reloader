const express = require('express')
const app = express()

const WebSocketServer = require('websocket').server;


var server = app.listen(3000, () => {
  console.log('Live reloader listening on port 3000!')
})

var connection;
var wsServer = new WebSocketServer({
  httpServer: server
})

wsServer.on('request', (request) => {
  connection = request.accept(null, request.origin);
})

app.get('/reload', (req, res) => {
  if(connection) {
    connection.sendUTF('reload')
  }
  res.send('success')
})