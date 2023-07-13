const {Sculpture} = require('../models/mongo');

const getAllSculpturesDB = async () => {
    const sculptures = await Sculpture.find()
    return sculptures
  }

  const getSculptureByIdDB = async (id) => {
    const sculpture = await Sculpture.findById(id)
    return sculpture
  }



  const createSculptureDB = async (payload) => {
    const newSculpture = new Sculpture(payload)
    await newSculpture.save()
    return newSculpture
  }


  const updateSculptureDB = async (id, payload) => {
    const sculpture = await Sculpture.findByIdAndUpdate(id,payload, {new: true})
    return sculpture
  }
  
  const deleteSculptureDB = async (id) => {
    const sculpture = await Sculpture.findByIdAndDelete(id)
  }
module.exports = {getAllSculpturesDB ,getSculptureByIdDB, createSculptureDB,updateSculptureDB,deleteSculptureDB}