const Product = require("../models/product");
const Categories = require("../models/categories");

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.json(products);
    res.end();
  });
};

exports.getCategories = (req, res) => {
  Categories.fetchAll((products) => {
    res.json(products);
    res.end();
  });
};
