const mongoose = require('mongoose');

const mountainSchema = new mongoose.Schema({
    mountain: String,
    metres: Number,
    metresSearchable: String,
    feet: Number,
    range: String,
    locationAndNotes: String,
    latitude: Number,
    longitude: Number,
    mainCountry: String,
    formattedAddress: String,
    rating: mongoose.Types.Decimal128,
    votes: Number
});

module.exports = mongoose.model('Mountain', mountainSchema);