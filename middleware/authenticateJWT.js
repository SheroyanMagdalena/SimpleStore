//authenticate user JWTs

const {verifyToken} = require('../utils/jwt')

function authenticateJWT(req, res, next) {
    const Header = req.headers.authorization
    const token = Header.split(' ')[1]

    const user = verifyToken(token)

    if(!user){
        return res.status(403).json({ message: 'Invalid or expired token' });
    }

    req.user = user
    next()
}

module.exports = authenticateJWT
