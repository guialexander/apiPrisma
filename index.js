const express= require('express');
const cors   = require('cors');
const morgan = require('morgan');
const {PrismaClient}= require ('@prisma/client');
const {
    handleGetAllData,
    handleGetByIdData,
 } = require('./controller')
  

const app = express();
const prisma =new PrismaClient();
app.use(cors())
// Middleware -> Función que se ejecuta antes de que llegue a la ruta -> Body parser
app.use(express.json());
app.use(morgan('dev'))

// RUTAS
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
  })
  
  // GET -> /restaurant
  app.get('/api/restaurants', handleGetAllData)
   
  // GET -> /restaurant/
  app.get('/api/restaurants/:id', handleGetByIdData)
  /*   
  // POST -> /restaurant
  app.post('/api/restaurants', handleCreateData)
  // POST -> /food
  app.post('/api/restaurants', handleCreateData)
  
  // patch -> /restaurant/id
  app.patch('/api/restaurants/:id', handleUpdateData)
  
  // DELETE -> /restaurant/id
  app.delete('/api/restaurants/:id', handleDeleteData)*/



const PORT =process.env.PORT ?? 8080;

app.listen(PORT,()=>{
    console.log(`Server Startes on Port ${PORT}`)
});



