const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const shopRoutes = require("./routes/shop");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);

app.listen(process.env.PORT);
