//hadle login & registration

const express = require('express')
const { generateToken } = require('../utils/jwt');
const {readData, writeData} = require('../utils/fileOperations')
const bcrypt = require('bcrypt')
const path = require('path')

const route = express.Router();

const filename = path.join(__dirname, '../data/users.json');

//Register
route.post('/register', async(req,res) =>{
    const {name, email, password, role } = req.body

    let users = readData(filename)

    const existUser = users.find(e => e.email === email)
    if(existUser) {
        return res.status(400).json({message: 'User already exists'})
    }
     const hashedPassword = await bcrypt.hash(password, 10);

     const newUser = {
        id: users.length + 1,
        name,
        email,
        password: hashedPassword,
        role: role || 'user'
     }

     users.push(newUser)

     writeData(filename, users)

     res.status(201).json({ message: 'User registered successfully' });
})

//Login

route.post('/login', async (req,res) =>{
    const { email, password } = req.body

    const users = readData(filename)
    const User = users.find(e => e.email === email)

    if(!User){
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const matchPassword = await bcrypt.compare(password, User.password)

    if(!matchPassword){
        return res.status(401).json({ message: 'Invalid password' });
    }

    const token = generateToken(User)
    res.status(200).json({ message: 'Login successful', token });

})

module.exports = route