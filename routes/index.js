const router = require('express').Router(); 

const animalRouter = require('./animals.js'); 

router.use('/animals', animalRouter); 

const plantRouter = require('./plants.js'); 

router.use('/plants', plantRouter); 

module.exports = router;