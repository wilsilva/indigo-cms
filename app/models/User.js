'use strict'

module.exports = function(sequelize, DataTypes){
    
    let User = sequelize.define('user',{
                name: {
                    type: DataTypes.STRING,
                    field: 'full_name'
                },
                email: {
                    type: DataTypes.STRING,
                    field: 'email'
                },
                password: {
                    type: DataTypes.STRING,
                    field: 'password'
                }
            },{
                timestamps: true
        });
        
    return User;
}