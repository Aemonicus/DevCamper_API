const express = require("express")

// Je récupère mes fonctions pour chaque route depuis /controllers/bootcamps
const { getCourses } = require("../controllers/courses")

const router = express.Router({ mergeParams: true })

router.route("/").get(getCourses)

module.exports = router