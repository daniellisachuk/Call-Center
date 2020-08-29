// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה

const uuid = require("uuid");
const Kafka = require("node-rdkafka");

const kafkaConf = {
  "group.id": "cloudkarafka-produce",
  "metadata.broker.list": "rocket-01.srvs.cloudkafka.com:9094,rocket-02.srvs.cloudkafka.com:9094,rocket-03.srvs.cloudkafka.com:9094".split(","),
  "socket.keepalive.enable": true,
  "security.protocol": "SASL_SSL",
  "sasl.mechanisms": "SCRAM-SHA-256",
  "sasl.username": process.env.KAFKA_UNAME,
  "sasl.password": process.env.KAFKA_PWORD,
  "debug": "generic,broker,security"
};

const prefix = process.env.KAFKA_PREFIX;
const topic = `${prefix}callInfo`;
const producer = new Kafka.Producer(kafkaConf);

const genMessage = m => new Buffer.alloc(m.length,m);

producer.on("ready", function(arg) {
  console.log(`producer is ready.`);
});
producer.connect();

module.exports.publish= function(msg)
{
  m=JSON.stringify(msg);
  producer.produce(topic, -1, genMessage(m), uuid.v4());
}

module.exports.disconnect = () => {
  console.log("Disconnected From Kafka");
  producer.disconnect();
}
