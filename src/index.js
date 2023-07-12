
const express = require('express');
const app = express();
const {connectionDB} = require ('./config/db.js')








connectionDB()

const PORT = 4001 
app.listen(PORT, ()=>{console.log(`Servidor corriendo en el puerto ${PORT}`);});	