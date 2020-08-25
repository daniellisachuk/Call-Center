exports.renderPage = (req, res) => {
  res.render('index', {
    title: "Call Center - Dashboard",
    body: "Cool Stuff"
  })
}
