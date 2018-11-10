"use strict";
const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/product.controller");
router.post('/search', ProductController.Search);
// router.put('/add', ProductController.Add);
// router.post('/edit', ProductController.Edit);
// router.delete('/delete', ProductController.Delete);
module.exports = router;
