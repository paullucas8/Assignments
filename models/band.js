var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BandSchema  = new Schema({
    name: {type: String, maxlength: 30, required: true, unique: true},
    albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }]
  });
  
var Band = mongoose.model('Band', BandSchema);

exports.BandSchema = BandSchema;
exports.Band = Band;