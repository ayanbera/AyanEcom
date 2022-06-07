const errorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if( NODE_ENV === 'DEVOLOPMENT') {
    res.status(err.statusCode).json({ 
        success: false,
        error: err,
        errMessage: err.message,
        stack:err.stack
    });
}

}