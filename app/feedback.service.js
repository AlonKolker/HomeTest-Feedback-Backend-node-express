const fs = require("fs")

var md5 = require("md5")

function getFeedbacks() {
  const feedbacks = fs.readFileSync("data/feedbacks.json", "utf8")
  return JSON.parse(feedbacks)
}

function addFeedback(newFeedback) {
  newFeedback.imgSrc = "https://www.gravatar.com/avatar/" + md5(newFeedback.email)
  let feedbacks = getFeedbacks()
  feedbacks.unshift(newFeedback)

  fs.writeFileSync("data/feedbacks.json", JSON.stringify(feedbacks, null, 2, "utf8"))
  return newFeedback
}

module.exports = {
  getFeedbacks,
  addFeedback,
}
