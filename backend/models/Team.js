const { default: mongoose } = require('mongoose');
const mongosse = require('mongoose');

const teamSchema = mongoose.Schema({
    name: {type: String, required: true},
    factory: {type: String, required: true},
    rider1: {type: String, required: true},
    rider2: {type: String, required: true},
    logoUrl: {type: String, required: true}
});

module.exports = mongoose.model('Team', teamSchema);