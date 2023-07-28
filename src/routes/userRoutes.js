const UserController = require('../controllers/userController')
async function userRoutes (fastify) {
  fastify.post('/login', UserController.login)
  fastify.post('/register', UserController.register)
  fastify.get('/users', UserController.getUsers)
}
module.exports = userRoutes
