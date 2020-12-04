const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http")

const router = express.Router; 

const app = express();

app.use(cors());

const shopRoutes = require("./routes/shop");


app.use(bodyParser.json());


app.use('/.netlify/functions/app', router);  // path must route to lambda
app.use(shopRoutes);
// app.use('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
//   console.log(path.join(__dirname, 'index.html'));
// });


module.exports = app;

module.exports.handler = serverless(app);