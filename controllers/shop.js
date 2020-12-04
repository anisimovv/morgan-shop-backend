const Product = require("../models/product");

const path = require("path");

exports.getProducts = (req, res) => {
  setTimeout((() => {
    Product.fetchAll((products) => {
      res.json(products);
      res.end();
    });
  }), 2000)
};
