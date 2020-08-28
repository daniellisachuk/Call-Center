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

const kafka = require('./kafka/KafkaConsume');

// WebSocket
io.on("connection", (socket) => {
    console.log("new user connected");
    // send data to client side upon arrival of kafka data
});

server.listen(port, () => {
  console.log("Listening on port " + port);
});
