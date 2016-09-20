var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  top: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  img: String,
  price: String,
  info1: String,
  info2: String,
  link: String,
  description: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

ProductSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ProductSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Product', ProductSchema);
