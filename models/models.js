const express = require('express');
const db = require('../db/index.js');


const get = () => {
  return db.findOne().exec();
};

const getProduct = () => {
  const product_id = req.params.product_id;
   return db.products.findOne({ id: `${product_id}`});
}

module.exports = {get, getProduct};