const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://daniel:${process.env.MONGO_PWORD}@cluster0.bj4a9.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("CallInfoDB").collection("CallInfo");
  // perform actions on the collection object
  module.exports.store = (msg) => {
      collection.insertOne(msg, function(err, res) {
      if (err) console.log(`[!] Mesage ${JSON.stringify(msg)} not Storered`);
      console.log("1 document inserted");
    });
  };

  module.exports.query = (query) => {

  };
});
