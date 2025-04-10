const express = require('express');
const router = express.Router();

const animalRoutes = require('./routesAnimal');

router.use('/animais', animalRoutes);

module.exports = router;
