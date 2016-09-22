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

response(data) {
	return {
		success: {
			status: "success",
			data: {data}
		},
		fail: {
			status: "fail",
			data: {data}
		},
		error: {
			status: "error",
			message: data.message,
			code: data.status,
			data: data.stack
		}
	}
}

	cget(req, res) {
		ProductsService.getProducts()
			.then(data => {
				if (data) {
					res.json(this.response(data).success);
				} else {
					res.status(404);
					res.json(this.response(data).fail);
				}
			})
			.catch(err => {
				res.status(err.status || 400);
				res.json(this.response(err).fail);
			});
	}

	get(req, res) {
		let id = req.params.id;
		ProductsService.getSingleProduct(id)
			.then(data => {
				if (data) {
					res.json(this.response(data).success);
				} else {
					res.status(404);
					res.json(this.response(data).fail);
				}
			})
			.catch(err => {
				res.status(err.status || 400);
				res.json(this.response(err).error);
			});
	}

	post(req, res) {
		let data = req.body;
		ProductsService.create(data)
			.then(data => {
				if (data) {
					res.json(this.response(data).success);
				} else {
					res.status(501);
					res.json(this.response(data).fail);
				}
			})
			.catch(err => {
				res.status(err.status || 422);
				res.json(this.response(err).error);
			});
	}

	put(req, res) {
		let id = req.params.id, data = req.body;
		data.updated_at = Date.now();
		ProductsService.update(id, data)
			.then(data => {
				if (data) {
					res.json(this.response(data).success)
				} else {
					res.status(501);
					res.json(this.response(data).fail);
				}
			})
			.catch(err => {
				res.status(err.status || 500);
				res.json(this.response(err).error);
			});
	}

	delete(req, res) {
		let id = req.params.id;
		ProductsService.delete(id)
			.then(data => {
				if (data) {
					res.json(this.response(data).success);
				} else {
					res.status(404);
					res.json(this.response(data).fail);
				}
			})
			.catch(err => {
				res.status(err.status || 400);
				res.json(this.response(err).error);
			});
	}
}

module.exports = ProductsController;