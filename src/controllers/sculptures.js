const getAllSculptures = async (req, res, next) => {
    res.status(200).send('getAllSculptures');
  };
  
  const getSculptureById = async (req, res, next) => {
    res.status(200).send('getSculptureById');
  };
  
  const createSculpture = async (req, res, next) => {
    res.status(200).send('createSculpture');
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
  