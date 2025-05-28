const express = require('express')
const { readData} = require('../utils/fileOperations');
const authenticateJWT = require('../middleware/authenticateJWT');
const authorizeRole = require('../middleware/authorizeRole');
const path = require('path')

const filename = path.join(__dirname, '../data/users.json');

const route = express.Router();


route.get('/users', authenticateJWT, authorizeRole, (req, res) =>{
  const users = readData(filename);
  res.json(users);
})

module.exports = route