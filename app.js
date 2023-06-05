const express= require('express');
const {PrismaClient}= require ('@prisma/client');


const app = express();
const prisma =new PrismaClient();
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message: 'Hello World'});
})


const PORT =process.env.PORT ?? 8080;

app.listen(PORT,()=>{
    console.log(`Server Startes on Port ${PORT}`)
});

app.get('/api/restaurants', async (req, res) => {
    const restaurants = await prisma.restaurant.findMany(
    {
        include:{
            foods:true,
        }
    });
    return res.json(restaurants);
});

app.post('/api/restaurants', async (req, res) => {
    const data = req.body;
  
    const RestaurantCreated = await prisma.restaurant.create({
      data: {
        name: data.name,
        schedules: data.schedules,
        category: data.category,
        foodtype:data.foodtype,
        address: data.address,
        logo: data.logo,
      },
    });
  
    return res.json(RestaurantCreated);
  });


  app.post('/api/foods', async (req, res) => {
    const data = req.body;
  
    const food = await prisma.foods.create({
      data: {
        name: data.name,
        price: data.price,
        image: data.image,
        rate: data.rate,
        restaurant: {
          connect: {
            id: data.restaurantId,
          },
        },
      },
    });
  
    return res.json(food);
  });
 
  