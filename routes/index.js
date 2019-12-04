const router = require('express').Router(); 

const electricRouter = require('./electric.js'); 

router.use('/electric', electricRouter); 

const internalCombustionRouter = require('./internalcombustion.js'); 

router.use('/internalcombustion', internalCombustionRouter); 

module.exports = router;
