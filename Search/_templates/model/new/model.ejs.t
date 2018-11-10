---
to: app/models/<%= name %>.model.js
---
"use strict";
var mongoose = require("mongoose");
var timestamps = require("goodeggs-mongoose-timestamps");
var Schema = mongoose.Schema;

var <%= Name %>Schema = new Schema({
	name: {
		type: String
	},
	removed: {
		type: Boolean,
		default: false
	},
});
<%= Name %>Schema.plugin(timestamps);
module.exports = mongoose.model("<%= Name %>", <%= Name %>Schema);

