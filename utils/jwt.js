//JWT generation and validation

const jwt = require('jsonwebtoken')
require("dotenv").config();


const secret_key = process.env.JWT_SECRET_KEY || "fallbackKey";


function generateToken(user){
    let data = {
        name: user.name,
        email: user.email,
        role: user.role,
    };

    const token = jwt.sign(data,secret_key, { expiresIn: '1h' });

    return token;
}

function verifyToken(token){
    try {
        const verified = jwt.verify(token, secret_key);
        
        return verified
    }
    catch(err){
        return null;
    }
}

module.exports = { generateToken, verifyToken };

