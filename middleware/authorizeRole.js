

function authorizeRole(req,res,next){
    if (!req.user) {
      return res.status(401).json({ message: 'No user info' });
    }

    if(req.user.role != 'admin'){
        return res.status(403).json({ message: 'Forbidden: Access denied' });
   
    }
    next()
}

module.exports = authorizeRole