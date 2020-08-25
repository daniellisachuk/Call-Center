exports.renderPage = (req, res) => {
  res.render('index', {
    title: "DB Segment",
    body: "Cool Stuff with MongoDB"
  })
}
