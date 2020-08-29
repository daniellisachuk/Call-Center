const path = require('path');

const express = require('express');
const app = express();
const port = 3003; // System C - port - 3003
const router = require('./router');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

app.set('views', 'views');
app.set("view engine", 'hbs');

app.use('/', router);

// MongoDB
const mongo = require('./mongodb/mongodb');

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
  console.log(`got message:\n${JSON.stringify(jsonMessage)}`);

  mongo.store(jsonMessage);

});
kafka.connect();

app.listen(port, () => {
  console.log("HTTP DB service - System C - Running\nListening for connections on port " + port);
});
