const models = require('../models');
const express = require('express');
let router = express.Router();

router.get('/',function(req,res,next){
    models.user.findAll().then((users) => {
        res.status(200).json(users);        
    });
});

router.get('/:idUser',function(req,res,next){
    models.user.findById(req.params.idUser).then((user) => {
        
        if(user){
            res.status(200).json(user);            
        }
        else{
            res.status(404).json({
                'error': 'User not found',
            });            
        }

    });
});

router.post('/create',function(req,res,next){
   
   let user = req.body;
   models.user.create(user).then((user) => {
        res.status(201).json(user);
   }).catch((error) => {
        res.status(406).json({
            'error': error.message,
        });
   });

});

router.put('/update/:idUser',function (req,res,next){
    
    models.user.findById(req.params.idUser).then((user) => {

        user.update(req.body,{
            fields: [
                'name',
                'email',
                'password'                
            ]
        }).then((user) => {
            res.status(200).json(user);
        }).catch((error) => {
            res.status(406).json({
                'error': error.message,
            });
        });
    }).catch((error) => {
        res.status(406).json({            
            'error': error.message,
        });    
    });
});

router.delete('/delete/:idUser',function (req,res,next){
    
    models.user.findById(req.params.idUser).then((user) => {

        user.destroy().then((user) => {
            res.status(200).json(user);
        }).catch((error) => {
            res.status(406).json({
                'error': error.message,
            });
        });
    }).catch((error) => {
        res.status(406).json({            
            'error': error.message,
        });    
    });
});

module.exports = router;