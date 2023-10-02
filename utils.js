const config = require('./config.json')

function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized - Token missing' });
    }
  
    if (token !== config.apitoken) {
      return res.status(403).json({ error: 'Forbidden - Invalid token' });
    }
    
    next();
}

module.exports = {
    verifyToken
}