// Traversing fiilesysetm
const path = require('path');

// Express JS
const express = require('express');
const app = express();
const port = 3001; // System A - port - 3001

// Handle routes
const router = require('./router');


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

app.listen(port, () => {
  console.log("Listening on port " + port);
});
