const express = require('express');
const router = require('express').Router();
const controllers = require('../controllers/controllers.js');

router.get('/products', controllers.get);
router.get('products/:product_id', controllers.getProduct);
router.get('products/:productId/styles', controllers.getStyles);
router.get('products/:productId/related', controllers.getRelated);



module.exports = router;