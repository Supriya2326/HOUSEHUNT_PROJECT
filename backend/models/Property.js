const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  description: String,
  image: String,
  type: String,
  postedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Property', PropertySchema);
