const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http")

const app = express();

const shopRoutes = require("./routes/shop");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/.netlify/functions/app', router);  // path must route to lambda


app.use(shopRoutes);

module.exports = app;
module.exports.handler = serverless(app);
