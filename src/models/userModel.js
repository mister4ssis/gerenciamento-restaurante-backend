const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

 const getAllUsers = async ()=> {

  return await prisma.user.findMany()

}

module.exports = { getAllUsers }
