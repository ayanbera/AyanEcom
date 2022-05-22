const express = require('express');
const router = express.Router();

const { createProd } = require ('../controller/product')

router.post('/Product', createProd);

module.exports = router;