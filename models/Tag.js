'use strict'

module.exports = function(sequelize, DataTypes) {
	let Tag = sequelize.define('tag', {
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

				Tag.belongsToMany(models.article, {
					through: 'article_tag',
					foreignKey: 'tag_id'
				});
			}
		}
	});

	return Tag;
}