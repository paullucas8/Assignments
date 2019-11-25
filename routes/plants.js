const router = require('express').Router(); 
const Plant = require('../controllers/plantController.js');

router.get('/', (req, res, next)=>{
    res.send(Plant.getPlants()); 
});

router.get('/:name', (req, res, next)=>{ 
    res.send(Plant.getPlant(req.param.name));
});

router.post('/', (req, res, next)=>{
    res.send(Plant.postPlants()); 
});

const plantRouter = router;
module.exports = plantRouter;