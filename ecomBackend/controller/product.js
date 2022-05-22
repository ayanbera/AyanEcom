const Product = require('../model/product');



exports.createProd = async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).send(product);
}


