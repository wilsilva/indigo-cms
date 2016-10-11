'use strict'

module.exports = {

	list(req,res){
		res.json({text: 'List posts CMS' });
	},

	findArticleById(req,res){
		res.json({text: 'Find post by id CMS' });
	},

	findArticleByTitle(req,res){
		res.json({text: 'Find post by title CMS' });
	},

	cerate(req,res){
		res.json({text: 'create post CMS' });
	},

	update(req,res){
		res.json({text: 'update post CMS' });
	},

	remove(req,res){
		res.json({text: 'remove post CMS' });
	},

};