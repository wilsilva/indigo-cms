'use strict'

const express = require('express');

const AuthController = require('../controllers/AuthController');
const Router = express.Router();

Router.post('/authenticate', AuthController.authenticate);

module.exports = Router;