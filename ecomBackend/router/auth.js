const express = require('express');
const router = express.Router();

const { userRegister } = require('../controller/authController');

router.post('/register', userRegister);

module.exports = router;