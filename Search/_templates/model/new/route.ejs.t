---
to: app/routes/<%= name %>.route.js
---
"use strict";
const express = require("express");
const router = express.Router();

const <%= Name %>Controller = require("../controllers/<%= name %>.controller");
router.get('/all', <%= Name %>Controller.All);
router.put('/add', <%= Name %>Controller.Add);
router.post('/edit', <%= Name %>Controller.Edit);
router.delete('/delete', <%= Name %>Controller.Delete);
module.exports = router;