const fs = require("fs")
var md5 = require("md5")

function getFeedbacks(req, res) {
  const feedbacks = fs.readFileSync("data/feedbacks.json", "utf8")
  res.send(JSON.parse(feedbacks))
}

function addFeedback(req, res) {
  let newFeedback = req.body
  let feedbacks = JSON.parse(fs.readFileSync("data/feedbacks.json", "utf8"))

  //   newFeedback.imgSrc = "https://www.gravatar.com/avatar/" + md5(newFeedback.email)//another option
  newFeedback.imgSrc = "https://i.pravatar.cc/150?u=$" + newFeedback.email

  feedbacks.unshift(newFeedback)

  fs.writeFileSync("data/feedbacks.json", JSON.stringify(feedbacks, null, 2, "utf8"))
  res.send(newFeedback)
}

module.exports = {
  getFeedbacks,
  addFeedback,
}
