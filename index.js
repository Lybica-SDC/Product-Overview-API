require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');
// const db = require('./db/index.js');


const path = require('path');


const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/products', routes);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`connected to db Web server running on: http://localhost:${PORT}`);
    })
  })
  .catch((error) => {
    console.log(error)
  });
