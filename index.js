require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const routes = require('./routes/routes.js');
const db = require('./db/index.js');


const path = require('path');


const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});