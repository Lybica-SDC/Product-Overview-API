const express = require('express');
const { Product, Feature, Photo, Related, Sku, Style } = require('../db/schemas.js');


const getAll = async (req, res) => {
  const products = await Product.find({}).limit(10).sort({ _id: 'asc' }).exec();

  res.status(200).json(products)
};

const getProduct = async (req, res) => {
  // const { id } = req.params;
  const product = await Product.findById(req.params.productId).populate('features').lean().exec();


  if (!product) {
    return res.status(404).json({error: 'No Product Found'})
  }
  res.status(200).json(product)
};

const getStyles = async (req, res) => {
  const styles = await Style.find({ productId: req.params.productId }).populate('photos').populate('skus').exec();

  if (!styles) {
    return res.status(404).json({ error: 'styles not found' });
  }

  res.status(200).json({
    product_id: req.params.productId,
    results: styles,
  }
  )
};

const getRelated = async (req, res) => {
  const related = await Related.find({ current_product_id: req.params.productId }, 'related_product_id').exec();
  if (!related) {
    return res.status(404).json({ error: 'related not found' })
  }
  res.status(200).json(related)
};


module.exports = {getAll, getProduct, getStyles, getRelated};

