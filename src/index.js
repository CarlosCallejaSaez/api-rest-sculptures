
const express = require('express');
const app = express();
const {connectionDB} = require ('./config/db.js')

const router = express.Router();

app.use(express.json())


const getAllSculptures = async (req, res, next) => {
    
  res.status(200).send("getallSculptures")
};


const getSculptureById = async (req, res, next) => {
  res.status(200).send("getSculptureById")
};


const createSculpture = async (req, res, next) => {
  res.status(200).send("createSculpture")
};



const updateSculptureById = async (req, res, next) => {
  res.status(200).send("updateSculptureById")
};

const deleteSculpture = async (req, res, next) => {
  res.status(200).send("deleteSculpture")
};

router.get('/sculptures', getAllSculptures)
router.get('/sculptures/:id', getSculptureById)
router.post('/sculptures', createSculpture)
router.put('/sculptures/:id', updateSculptureById)
router.delete('/sculptures/:id', deleteSculpture)




app.use('/api', router)



app.use('*', (req, res, next) => {
  res.status(404).json({data: 'Error 404: Page not found'})
})

app.use((error, req, res, next) => {
  res.status(500).json({data: 'Internal Server Error'})
})




connectionDB()

const PORT = 4001 
app.listen(PORT, ()=>{console.log(`Servidor corriendo en el puerto ${PORT}`);});	