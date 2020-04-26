// Middleware = fonction lancée entre la requête et la réponse pour toutes les routes par défaut
// Toujours req, res ET next car next permet d'enchainer 
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`)
  next()
}

module.exports = logger