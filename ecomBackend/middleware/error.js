const errorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    res.status(statusCode).send({ 
        success: false,
        error: err,
        errMessage: err.message,
        stack:err.stack
    });
}