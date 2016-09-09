// setup routes
var express = require('express');

///////ADDED for test//////////
var ProductsService = require('../services/products');
///////ADDED for test//////////

// controllers
var ProductsController = require('../controllers/products');

module.exports = {
	setup: function(app) {
	// setup routes

	///////ADDED for test//////////
	app.get('/products', function(req, res) {
		ProductsService.getProducts()
		.then(function(data) {
			res.send(data);
		});
	});

		app.post('/products', function(req, res) {
		ProductsService.create()
		.then(function(data) {
			res.send(data);
		});
	});
///////ADDED for test//////////


	// let apiRouter = express.Router();
	// app.use('/api', apiRouter);

	// let apiV1 = express.Router();
	// apiRouter.use('/v1', apiV1);

	// var productsApiV1 = express.Router();
	// apiV1.use('/products', productsApiV1);
	// var pc = new ProductsController(productsApiV1);
	}
};