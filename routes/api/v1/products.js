const express = require('express');

const router = express.Router();

const productsApi=require('../../../controllers/api/v1/products_api');

router.post('/create',productsApi.createProduct);

module.exports = router;