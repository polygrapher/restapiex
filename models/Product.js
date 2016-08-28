var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
