const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InternalCombustionSchema = new Schema({
    Brand:{type:String, required:true},
    Model:{type:String, required:true},
    engineDisplacement: {type: Number},
    topSpeed: {type: Number}
});

const InternalCombustion = mongoose.model("IC", InternalCombustionSchema);

module.exports = InternalCombustion;