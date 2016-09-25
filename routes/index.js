const models = require('../models');
const express = require('express');
let router = express.Router();


router.get('/',function(req,res){
    res.send('Welcome Indigo CMS');
});

module.exports = router;