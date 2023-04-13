const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    _id: Number,
    name: String,
    slogan: String,
    description: String,
    category: String,
    default_price: Number
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

productSchema.virtual('features', {
  ref: 'Feature',
  localField: '_id',
  foreignField: 'product_id',
});

const featuresSchema = new Schema({
  _id: Number,
  product_id: Number,
  feature: String,
  value: String
});

const photosSchema = new Schema({
  _id: Number,
  styleId: Number,
  url: String,
  thumbnail_url: String
});

const relatedSchema = new Schema({
  _id: Number,
  current_product_id: Number,
  related_product_id: Number
});

const skusSchema = new Schema({
  styleId: Number,
  size: String,
  quantity: Number
});

const stylesSchema = new Schema({
  _id: Number,
  productId: Number,
  name: String,
  sale_price: Number,
  original_price: Number,
  default_style: Boolean
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

stylesSchema.virtual('photos', {
  ref: 'Photo',
  localField: '_id',
  foreignField: 'styleId',
});

stylesSchema.virtual('skus', {
  ref: 'Sku',
  localField: '_id',
  foreignField: 'styleId',
});

const Product = mongoose.model('Product', productSchema, 'products');
const Feature = mongoose.model('Feature', featuresSchema, 'features');
const Photo = mongoose.model('Photo', photosSchema, 'photos');
const Related = mongoose.model('Related', relatedSchema, 'related');
const Sku = mongoose.model('Sku', skusSchema, 'skus');
const Style = mongoose.model('Style', stylesSchema, 'styles');

module.exports = {Product, Feature, Photo, Related, Sku, Style};