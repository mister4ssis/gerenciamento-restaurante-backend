require('dotenv').config()
const fastify = require('fastify')()
const userRoutes = require('./routes/userRoutes')

fastify.register(userRoutes)

fastify.listen(
  { host: '0.0.0.0', port: process.env.PORT || 3000 },
  function (err, address) {
    console.log(`server listening on ${address}`)
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  }
)
