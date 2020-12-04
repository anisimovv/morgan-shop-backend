const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "..", "data", "categories.json");
const getCategoriesFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Categories {
  constructor(id, title, alias, image, menuOrder) {
    this.id = id,
    this.title = title,
    this.alias = alias,
    this.image = image,
    this.menuOrder = menuOrder
  }

  static fetchAll(cb) {
    getCategoriesFromFile(cb);
  }
}