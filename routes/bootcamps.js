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

// Include other resource routers
const courseRouter = require("./courses")

const router = express.Router()

// Re-route into other resource routers
router.use("/:bootcampId/courses", courseRouter)

// J'exporte mes routes vers server.js où elles seront "mount"
// J'ai rajouté aux routes les fonctions récupérées depuis /controllers/bootcamps
// Je différencie celles nécessitant un id des autres
router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius)
router.route("/:id/photo").put(bootcampPhotoUpload)
router.route("/").get(getBootcamps).post(createBootcamp)
router.route("/:id").get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)

module.exports = router