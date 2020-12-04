const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const shopRoutes = require("./routes/shop");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRoutes);

app.listen(8000);
