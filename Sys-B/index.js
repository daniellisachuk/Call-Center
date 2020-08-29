const path = require('path');

const express = require('express');
const app = express();
const port = 3002; // System B - port - 3002
const router = require('./routes/router');

var server = require('http').createServer(app);
const io = require("socket.io")(server); //websocket

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

app.set('views', 'views');
app.set("view engine", 'hbs');

app.use('/', router);

// Reddis
// const reddis = require(/* path to reddis uploader file */)

// WebSocket
io.on("connection", (socket) => {
    console.log(`----> New User Connected : ${socket.id}`);
    socket.on("disconnect", () => {
      console.log(`<---- User Disconnected : ${socket.id}`);
    })
});

// Kafka
var counter = 0;
const kafka = require('./kafka/kafkaConsume');
kafka.on("data", function(m) {
  counter++;
  // commit offset every 5 messages
  if (counter % 5 === 0) {
    console.log("calling commit");
    kafka.commit(m);
  }

  jsonMessage = JSON.parse(m.value);
  console.log(`got message:\n${jsonMessage.toString()}`);
  // console.log(m.value.toString());

  // reddis.store(m);

  // will send data to all client side sockets upon arrival of kafka data
  io.emit("callDetails", jsonMessage);

});
kafka.connect();


server.listen(port, () => {
  console.log("HTTP Monitoring service - System B - Running\nListening for connections on port " + port);
});
