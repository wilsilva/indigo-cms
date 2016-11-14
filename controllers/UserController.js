'use strict'
const jwt = require('jsonwebtoken');
const models = require('../models');
const config = require('../config');

module.exports = {

	list(req, res, next) {
		models.user.findAll().then((users) => {
			res.status(200).json(users);
		});
	},

	getUserById(req, res, next) {
		models.user.findById(req.params.idUser).then((user) => {

			if (user) {
				res.status(200).json(user);
			} else {
				res.status(404).json({
					'error': 'User not found',
				});
			}

		});
	},

	create(req, res, next) {
		let user = req.body.user;
		models.user.create(user).then((user) => {
			res.status(201).json(user);
		}).catch((error) => {
			res.status(406).json({
				'error': error.message,
			});
		});
	},

	update(req, res, next) {
		models.user.findById(req.params.idUser).then((user) => {
			user.update(req.body.user, {
				fields: [
					'name',
					'email',
					'password'
				]
			}).then((user) => {
				res.status(200).json(user);
			}).catch((error) => {
				res.status(406).json({
					'error': error.message,
				});
			});
		}).catch((error) => {
			res.status(406).json({
				'error': error.message,
			});
		});
	},

	delete(req, res, next) {

		models.user.findById(req.params.idUser).then((user) => {

			user.destroy().then((user) => {
				res.status(200).json(user);
			}).catch((error) => {
				res.status(406).json({
					'error': error.message,
				});
			});
		}).catch((error) => {
			res.status(406).json({
				'error': error.message,
			});
		});
	},
}