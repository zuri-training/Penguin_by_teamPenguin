const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

router
.get('/', controller.getHome)
.get('/:category', controller.getCategory)
.get('/page/search', controller.getSearchPage)
.get('/search/product-search', controller.getSearch)
.get('/product-save/:id', controller.saveProduct)
.get('/product/saved-product', controller.getSavedProducts)

module.exports = router;