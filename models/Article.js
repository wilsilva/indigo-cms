'use strict'

module.exports = function(sequelize, DataTypes){
	let Article = sequelize.define('article',{
			title: {
				type: DataTypes.STRING,
				field: 'title',
				validate:{
					notEmpty: {
                          msg: 'Title is a required field'
                    }
				}
			},
			subtitle: {
				type: DataTypes.STRING,
				field: 'title',
				validate:{
					notEmpty: {
                          msg: 'Subtitle is a required field'
                    }
				}
			},
			article: {
				type: DataTypes.TEXT,
				field: 'article',
				validate:{
					notEmpty: {
                          msg: 'article is a required field'
                    }
				}
			}
	},{
		timestamps: true,
		classMethods: {
			associate(models){
				Article.belongsTo(models.user,{
					foreignKey: 'user_id'
				});
			}
		}
	});

	return Article;
}