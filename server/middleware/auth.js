const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // دریافت توکن از هدر
  const authHeader = req.header('Authorization');
  
  // بررسی وجود توکن
  if (!authHeader) {
    console.log('No authorization header');
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  
  // بررسی فرمت توکن (Bearer <token>)
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    console.log('Invalid token format');
    return res.status(401).json({ message: 'Invalid token format' });
  }
  
  const token = parts[1];
  console.log('Token received:', token.substring(0, 10) + '...');
  
  try {
    // بررسی اعتبار توکن
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token decoded:', decoded);
    req.admin = decoded;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ message: 'Token is not valid' });
  }
};