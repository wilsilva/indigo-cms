'use strict'
const config = require('../config');
const jwt = require('jsonwebtoken');

module.exports = {

  validate(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, config.tokenSecret, function(err, decoded) {

        if (err) {
          return res.json({
            error: 'Failed to authenticate token.'
          });
        } else {
          // if everything is good, save to request for use in other routes          
          req.userLogged = decoded;
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(403).json({
        error: 'No token provided.'
      });

    }
  }
}