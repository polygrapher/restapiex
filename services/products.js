let mongoose = require('mongoose');
let Product = require('../models/Product');

class ProductService {
	constructor() {}

	getProducts() {
		return Product.find().exec();
	}

	getSingleProduct(id) {
		return Product.findById(id);
	}

	create(data) {
		const product = new Product({
			name: data.name,
			category: data.category,
			description: data.description,
			created_at: new Date.now,
			updated_at: null
		})
		return product.save();
	}

	update() {

	}

	delete() {

	}
}

module.exports = new ProductService();