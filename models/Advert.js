var mongoose = require('mongoose');

var AdvertSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 100
	},
	category: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true,
		maxlength: 3000
	},
	type: {
		type: String,
		default: "advert"
	},
	top: {
		type: Boolean,
		default: false
	},
	images: Array,
	price: String,
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Advert', AdvertSchema);