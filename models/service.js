const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  details: String,
  duration: Number, // in minutes
  price: { type: Number, required: true },
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model('Service', serviceSchema); 