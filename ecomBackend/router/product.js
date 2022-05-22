const express = require('express');
const router = express.router();

const { createProd } = require ('../controller/product')

router.post('/Product', createProd);