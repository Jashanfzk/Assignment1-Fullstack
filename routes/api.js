const express = require('express');
const Product = require('../models/product');
const Service = require('../models/service');

const router = express.Router();

// GET /api/products 
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error fetching products' });
  }
});

// GET /api/services
router.get('/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error fetching services' });
  }
});

module.exports = router; 