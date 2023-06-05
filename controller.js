const {
    getAllData,
    getDataById,
     } = require('./model.js')
  
  
  async function handleGetAllData(req, res) {
    console.log('Middleware Controller')
    const restaurants = await getAllData()
    return res.json(restaurants)
  }

  async function handleGetByIdData(req, res) {
    const { id } = req.params
  
    const record = await getDataById(id)
  
 
    if (Object.keys(record).length === 0) {
      return res.status(404).json({
        message: 'Not found',
      })
    }
  
    return res.json(record)
  }
  
  
  
  module.exports = {
    handleGetAllData,
    handleGetByIdData,
   
  }