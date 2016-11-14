'use strict'

const jwt = require('jsonwebtoken');
const models = require('../models');
const config = require('../config');

module.exports = {

	authenticate(req, res, next) {
		let credentials = req.body.user;
		models.user.findOne({
			where: {
				email: credentials.email
			}
		}).then((user) => {
			if (!user) {
				res.status(401).json({
					error: 'Authentication failed. User not found.'
				});
			} else if (user) {
				if (user.password != credentials.password) {
					res.status(401).json({
						error: 'Authentication failed. Wrong password.'
					});
				} else {

					let token = jwt.sign(user.dataValues, config.tokenSecret, {
						expiresIn: 86400 // expires in 24 hours
					});

					res.status(200).json({
						token: token
					});
				}
			}
		}).catch((error) => {
			res.status(406).json({
				'error': error.message,
			});
		});
	},
}