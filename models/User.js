'use strict'

module.exports = function(sequelize, DataTypes){
    
    let User = sequelize.define('user',{
                name: {
                    type: DataTypes.STRING,
                    field: 'full_name',
                    validate:{
                                        
                        notEmpty: {
                          msg: 'Email is a required field'
                        }
                    }
                },
                email: {
                    type: DataTypes.STRING,
                    field: 'email',
                    validate:{
                        
                        isEmail: {
                          msg: 'Email must be a valid email address'
                        },

                        notEmpty: {
                          msg: 'Email is a required field'
                        }
                    }
                },
                password: {
                    type: DataTypes.STRING,
                    field: 'password',
                    validate:{
                                        
                        notEmpty: {
                          msg: 'Email is a required field'
                        }
                    }
                }
            },{
                timestamps: true
        });
        
    return User;
}