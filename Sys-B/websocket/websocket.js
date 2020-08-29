// WebSocket
module.exports.getWebSocket = function(server) {
  const io = require("socket.io")(server); //websocket
  const path = require('path');
  const redis = require(path.join(__dirname, '../redis/Redis'));

  io.on("connection", (socket) => {
      console.log(`----> New User Connected : ${socket.id}`);
      socket.on("disconnect", () => {
        console.log(`<---- User Disconnected : ${socket.id}`);
      })
  });
  
  // this aproach does not work
  // mabe if redisClient was imported here
  // insted of passing io to redis
  io.on("getAll", (msg) => {
    redis.pullAll(io);
  });

  return io;
}
