const mongoose = require('mongoose');

const riderSchema = mongoose.Schema({
    name: {type: String, required: true},
    number: {type: Number, required: true},
    nationality: {type: String, required: true},
    birth: {type: String, required: true},
    team: {type: String, required: true},
    helmetBrand: {type: String, required: true},
    combiBrand: {type: String, required: true},
    wins: {type: Number, required: true},
    podium: {type: Number, required: true},
    title: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    teamColor: {type: String, required: true}
})

module.exports = mongoose.model('Rider', riderSchema);