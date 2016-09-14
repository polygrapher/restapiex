let mongoose = require('mongoose');
let Product = require('../models/Product');

class ProductService {
	constructor() {}

	getProducts() {
		return Product.find({}).exec();
	}

	getSingleProduct(id) {
		return Product.findById(id);
	}

	create(data) {
		return Product.create(data)
	}

	update(id, data) {
		return Product.findByIdAndUpdate(id, data);
	}

	delete(id) {
		return Product.findByIdAndRemove(id);
	}
}

module.exports = new ProductService();