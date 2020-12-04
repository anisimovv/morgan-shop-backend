const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http")

const router = express.Router; 

const shopRoutes = require("./routes/shop");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(shopRoutes);

app.listen(8000);