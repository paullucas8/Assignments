const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ElectricSchema = new Schema({
    Brand:{type:String, required:true},
    Model:{type:String, required:true},
    batteryCapacity: {type: Number},
    topSpeed: {type: Number}
});

const Electric = mongoose.model("Electric", ElectricSchema);

module.exports = Electric;