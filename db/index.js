const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.DATABASE_URL;

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

module.exports = db;