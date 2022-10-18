const express = require("express")
const { getFeedbacks, addFeedback } = require("./feedback.controller")
const router = express.Router()

router.get("/", getFeedbacks)
router.post("/", addFeedback)

module.exports = router
