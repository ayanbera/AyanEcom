const Product = require('../model/product');

const catchAsyncError = require('../middleware/catchAsync');

const errorHandler = require('../utils/errorHandler');


exports.createProd = catchAsyncError (async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).send(product);
})


exports.getProd = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product) {
        res.status(404).send(`product not found with the id ${req.params.id}`);
    }
    else {
        res.status(200).send(product)
    }
}


exports.getProds = async (req, res, next) => {

    if(!req.query.id) { 

        const product = await Product.find();

     if(!product) {
        return next (new errorHandler("Product not found", 404));
    }
    else {
        res.status(200).send(product)
    }} else {
    const productById = await Product.findById(req.query.id);

    if(!productById) {
        return next (new errorHandler("Product not found", 404));
    }
    else {
        res.status(200).send(productById)
    }}
}

