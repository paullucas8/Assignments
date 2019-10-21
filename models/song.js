var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema  = new Schema({
    name: {type: String, maxlength: 30, required: true},
  });
  
var Song = mongoose.model('Song', SongSchema);

exports.SongSchema = SongSchema;
exports.Song = Song;