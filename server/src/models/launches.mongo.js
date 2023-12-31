const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        require: true,
        // default: 100,
        // min: 100,
        // max: 999,
    },
    launchDate: {
        type: Date,
        require: true,
    },
    mission: {
        type: String,
        require: true,
    },
    rocket: {
        type: String,
        require: true,
    },
    target: {
        type: String,
    },
    customers: [ String ],
    upcoming: {
        type: Boolean,
        require:true,
    },
    success: {
        type: Boolean,
        require: true,
        default: true,

    }
});

//Connect LaunchesSchema with the "launches" Collection

module.exports = mongoose.model('Launch', launchesSchema);
