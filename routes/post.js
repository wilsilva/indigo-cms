const models = require('../models');
const express = require('express');
let router = express.Router();

router.get('/',function(req,res){
    res.json({text: 'List posts CMS' });
});

module.exports = router;