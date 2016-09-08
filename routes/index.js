// setup routes
var express = require('express');

// controllers
var ProductsController = require('../controllers/products');

module.exports = {
	setup: function(app) {
	// setup routes
	let apiRouter = express.Router();
	app.use('/api', apiRouter);

	let apiV1 = express.Router();
	apiRouter.use('/v1', apiV1);

	var productsApiV1 = express.Router();
	apiV1.use('/products', productsApiV1);
	var pc = new ProductsController(productsApiV1);
	}
};