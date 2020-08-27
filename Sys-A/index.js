// Traversing fiilesysetm
const path = require('path');

// Express JS
const express = require('express');
const app = express();
const port = 3001; // System A - port - 3001

var server = require('http').createServer(app);
const io = require("socket.io")(server);

// Handle routes
const router = require('./routes/router');

// Handle kafka
const kafka = require('./kafka/kafkaProduce');


app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Use everything in 'Public' dir as partof base dir
app.use(express.static("public"));

// Set base dir for html docs as 'views'
// Set the displaying engine (the obj. that places values into parts of page) to be hbs
// requires all html files change thair extension to `.hbs`
app.set('views', 'views');
app.set("view engine", 'hbs');

app.use('/', router);

io.on("connection", (socket) => {
    console.log("new user connected");
    // when set button pressed
    socket.on("waitingCalls", (msg) => {
       console.log(msg.waitingCalls)
    });
    // when end button called
    socket.on("callDetails", (msg) => {
      console.log(msg);
      // kafka.publish(msg)
    });
});


server.listen(port, () => {
  console.log("HTTP service - System A - Running\nListening for connections on port " + port);
});
