var mongoose = require('mongoose');
var Schema = mongoose.Schema;

import SongSchema from "./models/song.js";

var AlbumSchema  = new Schema({
    name: {type: String, maxlength: 30, required: true, unique: true},
    genre: {type: String, maxlength: 30},
    songs: [SongSchema]
  });
  
var Album = mongoose.model('Album', AlbumSchema);

exports.AlbumSchema = AlbumSchema;
exports.Album = Album;