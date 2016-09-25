const models = require('../app/models');
const express = require('express');
let router = express.Router();

router.get('/',function(req,res){
    models.user.findAll().then((users) => {
        res.json(users);
    });
});

router.get('/:idUser',function(req,res,next){
    models.user.findAll({ where: { id: req.params.idUser } }).then((user) => {
        if(user.size)
            res.json(user);
        else{
            let error = new Error();
            error.status = 404;
            error.message = 'User not found';
            next(error);            
        }

    });
});

router.post('/create',function(req,res,next){

});

module.exports = router;