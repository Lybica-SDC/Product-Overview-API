const express = require('express');
const db = require('../db/index.js');
const { Product, Feature, Photo, Related, Sku, Style } = require('../db/schemas.js');



const get = () => {
  return db.findOne().exec();
};

const getProduct = (req) => {
  const product_id = req.params.product_id;
   return Product.findOne({ _id: `${product_id}`});
}

module.exports = {get, getProduct};