let mongoose = require('mongoose');
let Category = require('../models/Category');

class CategoryService {
	constructor() {}

	getCategories() {
		return Category.find({}).exec();
	}

	getSingleCategory(id) {
		return Category.findById(id);
	}
}

module.exports = new CategoryService();