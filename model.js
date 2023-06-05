const {PrismaClient}= require ('@prisma/client');
const prisma =new PrismaClient();

async function getAllData() {
  const restaurants = await prisma.restaurant.findMany(
    {
        include:{
            foods:true,
        }
    });
  return (restaurants)
}

async function getDataById(id) {
    const record = await prisma.restaurant.findUnique({
        where:{
            id
        }
    })  
    return record
  }


module.exports = {
  getAllData,
  getDataById,
 }