const express = require('express');
const app = express();

const connection = require('./db/connection.js');

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const index = require('./routes/index.js');

app.use('/api', index);

// TODO - add routes to application

// error handler
app.use((error,req,res,next)=>{
    
    res.send(error);
})

connection.once('open', ()=>{
    console.log("connected");
    const server = app.listen(8080, ()=>{
        console.log("listening");
    });
})
