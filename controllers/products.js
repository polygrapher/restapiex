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
		this.router.delete('/:id', this.delete.bind(this));
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
			product = ProductsService.getSingleProduct(id)
				.then((product) => {
					if (!product) {
						res.json([]);
					} else {
						res.json(product);
					}
			})
			.catch((err) => {
				next(err);
			});
	}

	post(req, res) {
		let data = req.body;
		ProductsService.create(data)
			.then((product) => {
				if (!product) {
					res.send('product didn\'t create');
				} else {
					res.send('product created');
					res.sendStatus(200);
				}
			})
			.catch((err) => {
				next(err);
			});
	}

	put(req, res) {
		let id = req.params.id,
			data = req.body;
		data.updated_at = Date.now();
		ProductsService.update(id, data)
			.then((product) => {
				if (!product) {
					res.send('product didn\'t update');
				} else {
					res.send('product updated');
				}
			})
			.catch((err) => {
				next(err);
			});
	}

	delete(req, res) {
		let id = req.params.id;
		ProductsService.delete(id)
			.then((product) => {
				if (!product) {
					res.send('product didn\'t create');
				} else {
					res.sendStatus(204);
				}
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = ProductsController;