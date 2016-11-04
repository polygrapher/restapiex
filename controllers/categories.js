'use strict';

var CategoryService = require('../services/categories');

class CategoriesController {
	constructor(router) {
		this.router = router;
		this.registerRoutes();
	}

	registerRoutes() {
		this.router.get('/', this.cget.bind(this));
		this.router.get('/:id', this.get.bind(this));
	}

response(data) {
	return {
		success: {
			status: "success",
			data
		},
		fail: {
			status: "fail",
			data
		},
		error: {
			status: "error",
			message: data.message,
			code: data.code,
			data: data.errors
		}
	}
}

	cget(req, res) {
		CategoryService.getCategories()
			.then(data => {
				res.json(this.response(data).success);
			})
			.catch(err => {
				res.status(err.status || 400);
				res.json(this.response(err).fail);
			});
	}

	get(req, res) {
		let id = req.params.id;
		CategoryService.getSingleCategori(id)
			.then(data => {
				res.json(this.response(data).success);
			})
			.catch(err => {
				res.status(err.status || 400);
				res.json(this.response(err).error);
			});
	}
}

module.exports = CategoriesController;