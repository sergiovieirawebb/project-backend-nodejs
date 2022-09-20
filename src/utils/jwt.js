const jwt = require('jsonwebtoken');
require('dotenv').config();

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

const generateJwtToken = (payload) => ({
  token: jwt.sign({ payload }, TOKEN_SECRET, jwtConfig),
});

const authenticateToken = (token) => jwt.verify(token, TOKEN_SECRET);

module.exports = {
  generateJwtToken,
  authenticateToken,
};
