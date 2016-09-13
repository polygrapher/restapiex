var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String,
	category: String,
	description: Array,
	src: String,
	type: String,
	top: Boolean,
	price: String,
	link: String,
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);