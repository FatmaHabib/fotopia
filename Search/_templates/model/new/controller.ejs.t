---
to: app/controllers/<%= name %>.controller.js
---
"use strict";
var <%= Name %> = require("../models/<%= name %>.model");

module.exports = {


	All: async function (req, res) {
		return res.json({success:true});
	},
	Add:async function (req,res){
		req.checkBody("name", "name is required").notEmpty();
		var errors = await req.getValidationResult();
		if(!errors.isEmpty())return (res.status(400).json({status: false,error: errors.array()}));
        

		var attr= {
			name:req.body.name,
		};
        
		var <%= name %> = new <%= Name %>(attr);
		await <%= name %>.save();
		return res.json({sucess:true,<%= name %>:<%= name %>});
	},
	Edit: async function(req,res){
		
		await <%= Name %>.update({_id:safeObjectId(req.params.id)},{removed:true});
		return res.json({success:true,msg:"<%= name %> deleted"});
	},
	Delete: async function(req,res){
		
		await <%= Name %>.update({_id:safeObjectId(req.params.id)},{removed:true});
		return res.json({success:true,msg:"<%= name %> deleted"});
	}

};