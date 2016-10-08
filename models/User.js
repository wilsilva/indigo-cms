'use strict'

module.exports = function(sequelize, DataTypes){
    
    let User = sequelize.define('user',{
                name: {
                    type: DataTypes.STRING,
                    field: 'full_name',
                    validate:{
                        notEmpty: {
                          msg: 'Email is a required field.'
                        }
                    }
                },
                email: {
                    type: DataTypes.STRING,
                    field: 'email',
                    validate:{                    
                        isEmail: {
                          msg: 'Email must be a valid email address.'
                        },
                        notEmpty: {
                          msg: 'Email is a required field.'
                        }
                    }
                },
                password: {
                    type: DataTypes.STRING,
                    field: 'password',
                    validate:{                                    
                        notEmpty: {
                          msg: 'Email is a required field.'
                        },
                        isMinPassword: function(password){
                            
                            if(password.length < 8)
                                throw new Error('Password minimum length 8 characters.');


                        }
                    }
                }
            },{
                timestamps: true,
                classMethods: {
                associate(models){
                    User.hasMany(models.article,{
                            foreignKey: 'user_id'
                        });
                    }
                }
        });
        
    return User;
}