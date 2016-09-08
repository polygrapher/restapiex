'use strict';

var ProductsService = require('../services/products');

class ProductsController {
	constructor(router) {
		this.router = router;
		this.registerRoutes();
	}

	registerRoutes() {
		this.router.get('/', this.cget.bind(this));
		this.router.get('/:id', this.get.bind(this));
		this.router.post('/', this.post.bind(this));
		this.router.put('/:id', this.put.bind(this));
	}

	cget(req, res) {
		ProductsService.getProducts()
			.then((products) => {
				res.json(products);
			})
			.catch((err) => {
				next(err);
			});
	}

	get(req, res) {
		let id = req.params.id,
			product = ProductsService.getSingleProduct(id);

		if (!product) {
			res.json([]);
		} else {
			res.json(product);
		}
	}

	put(req, res) {

	}

	post(req, res) {

	}
}

module.exports = ProductsController;