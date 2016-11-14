const express = require('express');

const AuthMiddleware = require('../middlewares/AuthMiddleware');
const Router = express.Router();
const UserController = require('../controllers/UserController');


Router.get('/', AuthMiddleware.validate, UserController.list);
Router.get('/:idUser', AuthMiddleware.validate, UserController.getUserById);
Router.post('/create', AuthMiddleware.validate, UserController.create);
Router.put('/update/:idUser', AuthMiddleware.validate, UserController.update);
Router.delete('/delete/:idUser', AuthMiddleware.validate, UserController.delete);

module.exports = Router;