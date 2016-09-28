const models = require('../models');
const express = require('express');
const jwt    = require('jsonwebtoken');
const config = require('../config');
const authMiddleware = require('../middlewares/auth');

let router = express.Router();

router.post('/authenticate', function(req,res,next){

    let credentials = req.body.user;

    models.user.findOne({ 
        where: {
            email: credentials.email
        }
    }).then((user) => {

        if(!user){
            res.status(401).json({ error : 'Authentication failed. User not found.'});
        }else if(user){
            if(user.password != credentials.password){
                res.status(401).json({ error : 'Authentication failed. Wrong password.'});
            }else{

                let token = jwt.sign(user.dataValues,config.tokenSecret,{
                            expiresIn: 86400 // expires in 24 hours
                        });

                res.status(200).json({
                    token: token
                });
            }
        }

    }).catch((error) => {
        res.status(406).json({            
            'error': error.message,
        });    
    });

});

router.get('/',authMiddleware,function(req,res,next){
    models.user.findAll().then((users) => {
        res.status(200).json(users);        
    });
});


router.get('/:idUser',authMiddleware,function(req,res,next){
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

router.post('/create',authMiddleware,function(req,res,next){
   
   let user = req.body.user;
   models.user.create(user).then((user) => {
        res.status(201).json(user);
   }).catch((error) => {
        res.status(406).json({
            'error': error.message,
        });
   });

});

router.put('/update/:idUser',authMiddleware,function (req,res,next){
    
    models.user.findById(req.params.idUser).then((user) => {

        user.update(req.body.user,{
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

router.delete('/delete/:idUser',authMiddleware,function (req,res,next){
    
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