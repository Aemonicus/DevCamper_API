const express = require("express")

// Je récupère mes fonctions pour chaque route depuis /controllers/bootcamps
const { getBootcamp, getBootcamps, createBootcamp, updateBootcamp, deleteBootcamp } = require("../controllers/bootcamps")

const router = express.Router()

// J'exporte mes routes vers server.js où elles seront "mount"
// J'ai rajouté aux routes les fonctions récupérées depuis /controllers/bootcamps
// Je différencie celles nécessitant un id des autres
router.route("/").get(getBootcamps).post(createBootcamp)
router.route("/:id").get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)

module.exports = router