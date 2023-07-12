const mongoose = require('mongoose');

mongoose.set('strict', false)
mongoose.set('strictPopulate', false)
mongoose.set('strictQuery', false)

const connectionDB = async () => {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/sculptures') // localhost ---> 127.0.0.1 para que logre conectar
      console.log('Conectado a la Base de Datos')
    } catch (error) {
      console.error(`No ha sido posible conectarse a la base de datos, error: ${error}`)
    }
  }
  
  module.exports = {connectionDB}
