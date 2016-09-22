var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: { type: String, required: true },
	category: { type: String, required: true },
	description: Array,
	type: { type: String, default: "advert" },
	top: Boolean,
	src: String,
	price: String,
	link: String,
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);