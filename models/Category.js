var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
	title: String,
	slug: String,
	subcategories: Array
});

module.exports = mongoose.model('Category', CategorySchema);