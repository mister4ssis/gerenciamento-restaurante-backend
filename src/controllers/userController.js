const userModel = require('../models/userModel')
async function login (request, reply) {

}
async function register (request, reply) {

}
async function getUsers (request, reply) {

  const users = await userModel.getAllUsers()
  reply.code(200).send({
    users
  });
  

}
module.exports = { login, register, getUsers }
