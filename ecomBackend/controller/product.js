const product = require('../model/product');

exports.createProd = async (req, res, next) => {

    const product = await product.create(req.body);
}


