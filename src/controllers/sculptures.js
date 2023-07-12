
const {getAllSculpturesDB, createSculptureDB} = require ('../repositories/sculptures.js')


const getAllSculptures = async (req, res, next) => {
  const sculptures = await getAllSculpturesDB()
    res.status(200).json({ data: sculptures });
  };
  
  const getSculptureById = async (req, res, next) => {
    res.status(200).send('getSculptureById');
  };
  
  const createSculpture = async (req, res, next) => {
    const newSculpture= await createSculptureDB({
      name: req.body.name,
      country: req.body.country,
      artist: req.body.artist,
      year: req.body.year,
      height: req.body.height,
    });
    res.status(201).json({ data: newSculpture });
  };
  
  const updateSculptureById = async (req, res, next) => {
    res.status(200).send('updateSculptureById');
  };
  
  const deleteSculpture = async (req, res, next) => {
    res.status(200).send('deleteSculpture');
  };
  
  module.exports = {
    getAllSculptures,
    getSculptureById,
    createSculpture,
    updateSculptureById,
    deleteSculpture,
  };
  