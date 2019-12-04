const router = require('express').Router(); 
const Electric = require('../models/Electric.js');

router.get('/', (req, res, next)=>{
    Electric.find().exec()
    .then(results=>{
        res.send(results); })
    .catch(error=>next(error)); 
});

router.get('/:brand', (req, res, next)=>{ 
    Electric.find({'Brand':req.params.brand}).exec() 
    .then(results=>{
        res.send(results); })
    .catch(error=>next(error)); 
});

router.post('/', (req, res, next)=>{
    let newElectric = new Electric(req.body);
    newElectric.save() 
    .then(()=>{
        res.status(201).send(newElectric); })
.   catch(error=>next(error));
});

const electricRouter = router;
module.exports = electricRouter;