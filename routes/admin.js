const express = require('express');
const Product = require('../models/product');
const Service = require('../models/service');

const router = express.Router();

// Dashboard 
router.get('/', (req, res) => {
  res.render('index', { title: 'Admin Dashboard' });
});

// PRODUCTS
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('products', { title: 'Products', products });
  } catch (err) {
    console.log(err);
    res.redirect('/?msg=Error loading products');
  }
});

router.post('/products/add', async (req, res) => {
  try {
    await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      inStock: req.body.inStock === 'on',
    });
    res.redirect('/products?msg=Product added');
  } catch (err) {
    console.log(err);
    res.redirect('/products?msg=Error adding product');
  }
});

router.post('/products/delete/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products?msg=Product deleted');
  } catch (err) {
    console.log(err);
    res.redirect('/products?msg=Error deleting product');
  }
});

//  Edit product
router.get('/products/edit/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const products = await Product.find();
    res.render('products', { title: 'Edit Product', products, editProduct: product });
  } catch (err) {
    console.log(err);
    res.redirect('/products?msg=Error loading product');
  }
});

router.post('/products/edit/:id', async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      inStock: req.body.inStock === 'on',
    });
    res.redirect('/products?msg=Product updated');
  } catch (err) {
    console.log(err);
    res.redirect('/products?msg=Error updating product');
  }
});

//  Edit for SERVICES 
router.get('/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.render('services', { title: 'Services', services });
  } catch (err) {
    console.log(err);
    res.redirect('/?msg=Error loading services');
  }
});

router.post('/services/add', async (req, res) => {
  try {
    await Service.create({
      title: req.body.title,
      details: req.body.details,
      duration: req.body.duration,
      price: req.body.price,
      active: req.body.active === 'on',
    });
    res.redirect('/services?msg=Service added');
  } catch (err) {
    console.log(err);
    res.redirect('/services?msg=Error adding service');
  }
});

router.post('/services/delete/:id', async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.redirect('/services?msg=Service deleted');
  } catch (err) {
    console.log(err);
    res.redirect('/services?msg=Error deleting service');
  }
});

//  Edit
router.get('/services/edit/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    const services = await Service.find();
    res.render('services', { title: 'Edit Service', services, editService: service });
  } catch (err) {
    console.log(err);
    res.redirect('/services?msg=Error loading service');
  }
});

router.post('/services/edit/:id', async (req, res) => {
  try {
    await Service.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      details: req.body.details,
      duration: req.body.duration,
      price: req.body.price,
      active: req.body.active === 'on',
    });
    res.redirect('/services?msg=Service updated');
  } catch (err) {
    console.log(err);
    res.redirect('/services?msg=Error updating service');
  }
});

module.exports = router; 