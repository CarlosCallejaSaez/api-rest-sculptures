const mongoose = require('mongoose');

const sculptureSchema = new mongoose.Schema({
    name: { type: String },
    country : { type: String },
    artist: { type: String },
    year : { type: Number },
    height : { type: Number }
});

const Sculpture = mongoose.model('Sculpture', sculptureSchema)

module.exports = { Sculpture };