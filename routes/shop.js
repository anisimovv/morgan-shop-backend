const express = require("express");

const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/categories", shopController.getCategories);
router.get("/products", shopController.getProducts);

module.exports = router;
