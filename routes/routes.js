const express = require('express');
const router = express.Router();
const {getAll, getProduct, getStyles, getRelated} = require('../controllers/controllers.js');

router.get('/', getAll);
router.get('/:productId', getProduct);
router.get('/:productId/styles', getStyles);
router.get('/:productId/related', getRelated);



module.exports = router;