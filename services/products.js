let mongoose = require('mongoose');
let Advert = require('../models/Advert');

class ProductService {
	constructor() {}

	getProducts() {
		return Advert.find({}).exec();
	}

	getSingleProduct(id) {
		return Advert.findById(id);
	}

	create(data) {
		return Advert.create(data)
	}

	update(id, data) {
		return Advert.findByIdAndUpdate(id, data);
	}

	delete(id) {
		return Advert.findByIdAndRemove(id);
	}
}

module.exports = new ProductService();