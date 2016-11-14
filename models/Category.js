'use strict'

module.exports = function(sequelize, DataTypes) {
	let Category = sequelize.define('category', {
		name: {
			type: DataTypes.STRING,
			field: 'name',
			validate: {
				notEmpty: {
					msg: 'Name is a required field'
				}
			}
		}
	}, {
		timestamps: true,
		classMethods: {

			associate(models) {

				Category.hasMany(models.article, {
					foreignKey: 'category_id'
				});
			}
		}
	});

	return Category;
}