let express = require('express');
let app = express(); // Create the Express Application

let mongoose = require('mongoose');
let mongoDB= `mongodb+srv://paullucas:hellojordan@cluster0-simxr.mongodb.net/assignment-5?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology:true});
let db= mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', ()=>{ console.log("connected to database") // connect to server here
});

//handle results of validation

app.set('view engine', 'ejs');

app.use(express.static('public'));

// Application stuff will go here. So far, our application does nothing


app.set('port', 8080);

const server = app.listen(app.get('port'),() => {
    console.log('listening on' , app.get('port'));
});