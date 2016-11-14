const express = require('express');

const AuthMiddleware = require('../middlewares/AuthMiddleware');
const Router = express.Router();
const ArticleController = require('../controllers/ArticleController');

Router.get('/', AuthMiddleware.validate, ArticleController.list);
Router.get('/:idArticle', AuthMiddleware.validate, ArticleController.findArticleById);
Router.get('/search/:titleArticle', AuthMiddleware.validate, ArticleController.findArticleByTitle);
Router.post('/create', AuthMiddleware.validate, ArticleController.create);

module.exports = Router;
