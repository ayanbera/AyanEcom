const express = require('express');
const app = express();

const product = require('./router/product')
const auth = require('./router/auth');

app.use(express.json());


app.use('/api/', product);
app.use('/api/', auth);

module.exports = app;