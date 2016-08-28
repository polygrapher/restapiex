let mongoose = require('mongoose');
let Product = require('../models/Product');

class ProductService {
    constructor() {}

    getProducts() {
        return Product.find().exec();
    }

    getSingleProduct() {

    }

    create() {

    }

    update() {

    }

    delete() {

    }
}

module.exports = new ProductService();