const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

router.get('/', async (req, res) => {
  const { location, minPrice, maxPrice, type } = req.query;
  const filter = {};
  if (location) filter.location = location;
  if (type) filter.type = type;
  if (minPrice || maxPrice) filter.price = {};
  if (minPrice) filter.price.$gte = Number(minPrice);
  if (maxPrice) filter.price.$lte = Number(maxPrice);
  const properties = await Property.find(filter);
  res.json(properties);
});

router.post('/', async (req, res) => {
  const newProperty = new Property(req.body);
  await newProperty.save();
  res.status(201).json(newProperty);
});

module.exports = router;
