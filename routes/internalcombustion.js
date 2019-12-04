const router = require('express').Router(); 
const InternalCombustion = require('../models/InternalCombustion.js');

router.get('/', (req, res, next)=>{
    InternalCombustion.find().exec()
    .then(results=>{
        res.send(results); })
    .catch(error=>next(error)); 
});

router.get('/:brand', (req, res, next)=>{ 
    InternalCombustion.find({'Brand':req.params.brand}).exec() 
    .then(results=>{
        res.send(results); })
    .catch(error=>next(error)); 
});

router.post('/', (req, res, next)=>{
    let newInternalCombustion = new InternalCombustion(req.body);
    newInternalCombustion.save() 
    .then(()=>{
        res.status(201).send(newInternalCombustion); })
.   catch(error=>next(error));
});

const internalCombustionRouter = router;
module.exports = internalCombustionRouter;