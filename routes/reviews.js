const express = require("express")

// Je récupère mes fonctions pour chaque route depuis /controllers/bootcamps
const { getReviews } = require("../controllers/reviews")

const Review = require("../models/Review")

const router = express.Router({ mergeParams: true })

const advancedResults = require("../middleware/advancedResults")
const { protect, authorize } = require('../middleware/auth')

router
  .route("/")
  .get(advancedResults(Review, { path: "bootcamp", select: "name description" }), getReviews)


module.exports = router