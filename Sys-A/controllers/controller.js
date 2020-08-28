exports.renderPage = (req, res) => {
  res.render('index', {
    title: "Call Center",
    body: "Cool Stuff"
  })
}
