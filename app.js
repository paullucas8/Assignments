const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

const connection = require('./db/connection.js');

let path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const router = require('./routes/index.js');

app.use('/api', router);

// TODO - add routes to application

// error handler
app.use((error,req,res,next)=>{
    
    res.send(error);
})

app.set('port', process.env.PORT || 8080); // create a setting called 'port' , with value either equal to 8080, or whatever the PORT environment variable is on the server.
let server = app.listen(app.settings.port, () => { console.log('Server ready on ', app.settings.port);
});// create the server and start it up. Print a message to the console letting us know it's working

connection.once('open', ()=>{
    console.log("connected");
    const server = app.listen(8072, ()=>{
        console.log("listening");
    });
})
