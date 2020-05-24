const express = require("express")

// Je récupère mes fonctions pour chaque route depuis /controllers/bootcamps
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  bootcampPhotoUpload
} = require("../controllers/bootcamps")

const Bootcamp = require("../models/Bootcamp")
const advancedResults = require("../middleware/advancedResults")

// Include other resource routers
const courseRouter = require("./courses")

const router = express.Router()

const { protect, authorize } = require('../middleware/auth')

// Re-route into other resource routers
router.use("/:bootcampId/courses", courseRouter)

// J'exporte mes routes vers server.js où elles seront "mount"
// J'ai rajouté aux routes les fonctions récupérées depuis /controllers/bootcamps
// Je différencie celles nécessitant un id des autres
router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius)
router.route("/:id/photo").put(protect, authorize("publisher", "admin"), bootcampPhotoUpload)
router.route("/").get(advancedResults(Bootcamp, "courses"), getBootcamps).post(protect, authorize("publisher", "admin"), createBootcamp)
router.route("/:id").get(getBootcamp).put(protect, authorize("publisher", "admin"), updateBootcamp).delete(protect, authorize("publisher", "admin"), deleteBootcamp)

module.exports = router