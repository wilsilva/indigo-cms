'use strict'

const models = require('../models'),
	util = require('util');

module.exports = {

	list(req, res) {
		models.article.findAll().then((articles) => {
			res.status(200).json(articles);
		});
	},

	findArticleById(req, res) {
		models.article.findById(req.params.idArticle).then((article) => {

			if (article) {
				res.status(200).json(article);
			} else {
				res.status(404).json({
					'error': 'Article not found',
				});
			}

		});
	},

	findArticleByTitle(req, res) {
		models.article.findAll({
			where: {
				title: {
					$like: "%" + req.params.titleArticle + "%"
				}
			}
		}).then((articles) => {
			res.status(200).json(articles);
		});
	},

	create(req, res) {
		let article = req.body.article;
		models.article.create(article).then((article) => {
			res.status(201).json(article);
		}).catch((error) => {
			res.status(406).json({
				'error': error.message,
			});
		});
	},

	update(req, res) {
		res.json({
			text: 'update post CMS'
		});
	},

	remove(req, res) {
		res.json({
			text: 'remove post CMS'
		});
	},

};