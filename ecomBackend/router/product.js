const express = require('express');
const router = express.Router();



const { createProd, getProd, getProds } = require ('../controller/product')

router.post('/Product', createProd);

router.get('/Product/:id', getProd); //Get by Id

router.get('/Product', getProds);

module.exports = router;