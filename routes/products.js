const express = require('express')
const { readData, writeData } = require('../utils/fileOperations');
const authenticateJWT = require('../middleware/authenticateJWT');
const authorizeRole = require('../middleware/authorizeRole');
const path = require('path')

const filename = path.join(__dirname, '../data/products.json');

const route = express.Router();

route.get('/', (req, res) => {
  const products = readData(filename);
  res.json(products);
});

route.post('/', authenticateJWT, authorizeRole, (req, res) =>{
    const { name, price, category } = req.body

    if (!name || !price || !category) {
    return res.status(400).json({ message: 'Missing product info' });
  }

  const products = readData(filename);
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category
  };

  products.push(newProduct);
  writeData(filename, products);

  res.status(201).json({ message: 'Product added successfully' });

})

module.exports = route