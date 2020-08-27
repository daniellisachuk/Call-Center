exports.renderPage = (req, res) => {
  res.render('index', {
    title: "Call Center",
    body: "Cool Stuff"
  })
}

exports.postToKafka = (req, res) => {
  // if kafka is web based api (where he wanted to host kafka), then the module
  // to call is called axios
  // Usage:
  // const axios = require('axios');
  // axios.get(API_URL)
       // .then((API_RESPONSE) => {}) # what to do with legit response
       // .catch((ERROR) => {})       # what to do in case of error
  // res.render('index', {
  //   title: "Call Center-POST",
  //   body: `Got Post Req: Waiting Calls : ${req.body.waitingCalls} Situation : ${req.body.situation}`
  // })
    console.log(`Got Post Req:
       Waiting Calls : ${req.body.waitingCalls}
       Situation : ${req.body.situation}
       startTime: ${req.body.startTime}
       duration: ${req.body.duration}
       city: ${req.body.city}
       topic: ${req.body.topic}
       language: ${req.body.language}
       gender: ${req.body.gender}
       age: ${req.body.age}`);

    res.send({
      test: "data2"
    })
};
