const {
  getAllSculpturesDB,
  getSculptureByIdDB,
  createSculptureDB,
  updateSculptureDB,
  deleteSculptureDB,
} = require("../repositories/sculptures.js");

const getAllSculptures = async (req, res, next) => {
  const sculptures = await getAllSculpturesDB();
  res.status(200).json({ data: sculptures });
};

const getSculptureById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const sculpture = await getSculptureByIdDB(id);
    res.status(200).json({ data: sculpture });
  } catch (err) {
    res.status(404).json({ data: `sculpture with id : ${id} not found` });
  }
};

const createSculpture = async (req, res, next) => {
  const newSculpture = await createSculptureDB({
    name: req.body.name,
    country: req.body.country,
    artist: req.body.artist,
    year: req.body.year,
    height: req.body.height,
  });
  res.status(201).json({ data: newSculpture });
};

const updateSculptureById = async (req, res, next) => {
  const {id} = req.params;
  const {name, country, artist,year, height} = req.body;
  try {
    const sculptureUpdated = await updateSculptureDB(id, {name, country, artist,year, height});
    res.status(200).json({ data: sculptureUpdated});
  } catch (err) {
    res.status(404).json({ data: `Sculpture with id: ${id} doesn't exist` });
  }
};

const deleteSculpture = async (req, res, next) => {
  const {id} = req.params;
  try {
    await deleteSculptureDB(id);
    res.status(200).json({ data: `Sculpture with id: ${id} deleted ` });
  } catch (err) {
    res.status(404).json({ data: `Sculpture with id: ${id} doesn't exist` });
  }
};


module.exports = {
  getAllSculptures,
  getSculptureById,
  createSculpture,
  updateSculptureById,
  deleteSculpture,
};
