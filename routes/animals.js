const router = require('express').Router(); 
const Animal = require('../controllers/animalController.js');

router.get('/', (req, res, next)=>{
    res.send(Animal.getAnimals()); 
});

router.get('/:name', (req, res, next)=>{ 
    res.send(Animal.getAnimal(req.param.name));
});

router.post('/', (req, res, next)=>{
    res.send(Animal.postAnimals()); 
});

const animalRouter = router;
module.exports = animalRouter;