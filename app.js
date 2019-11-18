let express = require('express');
let app = express(); // Create the Express Application
// Application stuff will go here. So far, our application does nothing
var router = express.Router();

let path = require('path');

app.use(express.static('public'));

app.set('port', process.env.PORT || 8080); // create a setting called 'port' , with value either equal to 8080, or whatever the PORT environment variable is on the server.
let server = app.listen(app.settings.port, () => { console.log('Server ready on ', app.settings.port);
});// create the server and start it up. Print a message to the console letting us know it's working