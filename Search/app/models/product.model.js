"use strict";
var mongoose = require("mongoose");
var timestamps = require("goodeggs-mongoose-timestamps");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	name: {
		type: String
	},
	image: {
		type: String
	},
	price: {
		type: String
	},
	brand: {
		type: String
	},
	category:{
id:Number,
name:String
	},
});
ProductSchema.plugin(timestamps);
module.exports = mongoose.model("Product", ProductSchema);
