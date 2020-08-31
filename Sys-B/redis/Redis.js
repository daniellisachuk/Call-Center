// הפעילו את
// redis
// מתמונת דוקר הנמצאית כאן
// https://hub.docker.com/_/redis
//  ip for redis server 192.168.1.17

var redis = require('redis');
var redisClient = redis.createClient({port : 6379, host : 'localhost'});

redisClient.on('connect', function () {
    console.log('Sender connected to Redis');
});

// for explanations : https://www.sitepoint.com/using-redis-node-js/
module.exports.store = function(msg){
    key = msg.startTime;
    redisClient.set(key, JSON.stringify(msg));
    var todayEnd = new Date().setHours(23, 59, 59, 999);
    redisClient.expireat(key, parseInt(todayEnd/1000));
  };

module.exports.pullAll = function (io) {
  console.log("pillAll was Called");
  redisClient.keys('*', function (err, keys) {
    if (err) return console.log(err);

    for(var i = 0, len = keys.length; i < len; i++) {
      console.log(keys[i]);
      redisClient.get(keys[i], function(err, reply) {
        console.log(reply);
          io.emit("callDetails", JSON.parse(reply));
      });
    }
  });
};
