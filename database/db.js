let mongoose = require('mongoose');
let mongoDB= `mongodb+srv://paullucas:hellojordan@cluster0-simxr.mongodb.net/assignment-5?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology:true});
let db= mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
exports.db = db;