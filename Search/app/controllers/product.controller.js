"use strict";
var Product = require("../models/product.model");

module.exports = {


	Search: async function (req, res) {
		var search=req.body.search;
		if(search.length!=0)
		{
		let products = await Product.find({$or: [ { name:{$regex: new RegExp(search, "ig")} },{image:{$regex: new RegExp(search, "ig")}},{price:{$regex: new RegExp(search, "ig")}},{brand:{$regex: new RegExp(search, "ig")}},{category:{ $elemMatch: { id: {$regex: new RegExp(search, "ig")},name:{$regex: new RegExp(search, "ig")} } }}]});
		return res.json({success:true,products:products});
	}
	return res.json({success:true});
	}
	// Add:async function (req,res){
	// 	req.checkBody("name", "name is required").notEmpty();
	// 	var errors = await req.getValidationResult();
	// 	if(!errors.isEmpty())return (res.status(400).json({status: false,error: errors.array()}));
	//
	//
	// 	var attr= {
	// 		name:req.body.name,
	// 	};
	//
	// 	var product = new Product(attr);
	// 	await product.save();
	// 	return res.json({sucess:true,product:product});
	// },
	// Edit: async function(req,res){
	//
	// 	await Product.update({_id:safeObjectId(req.params.id)},{removed:true});
	// 	return res.json({success:true,msg:"product deleted"});
	// },
	// Delete: async function(req,res){
	//
	// 	await Product.update({_id:safeObjectId(req.params.id)},{removed:true});
	// 	return res.json({success:true,msg:"product deleted"});
	// }

};
