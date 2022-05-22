const express = require('express');
const app = express();

const product = require('./router/product')

app.use(express.json());


app.use('/api/', product)

module.exports = app;