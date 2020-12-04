const Product = require("../models/product");

exports.getProducts = (req, res) => {
  setTimeout((() => {
    Product.fetchAll((products) => {
      res.json(products);
    });
  }), 5000)
};
