const models = require('../models');
const express = require('express');
const authMiddleware = require('../middlewares/auth');
let router = express.Router();

router.get('/',authMiddleware,function(req,res){
    res.json({text: 'List posts CMS' });
});

module.exports = router;