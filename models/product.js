const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "..", "data", "products.json");
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, categoryId, name, alias, price, image) {
    this.id = id,
    this.categoryId = categoryId,
    this.name = name,
    this.alias = alias,
    this.price = price,
    this.image = image
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}