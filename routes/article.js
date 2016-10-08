const express = require('express');

const AuthMiddleware = require('../middlewares/AuthMiddleware');
const Router = express.Router();
const ArticleController = require('../controllers/ArticleController');

Router.get('/',AuthMiddleware.validate, ArticleController.list);

module.exports = Router;