const {Sculpture} = require('../models/mongo');

const getAllSculpturesDB = async () => {
    const sculptures = await Sculpture.find()
    return sculptures
  }

  const createSculptureDB = async (payload) => {
    const newSculpture = new Sculpture(payload)
    await newSculpture.save()
    return newSculpture
  }

module.exports = {getAllSculpturesDB , createSculptureDB}