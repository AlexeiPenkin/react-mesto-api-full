const jwt = require('jsonwebtoken');
const FORBIDDEN_ERROR = require('../errors/forbidden-error');

const { JWT_SECRET, NODE_ENV } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new FORBIDDEN_ERROR({ message: 'Необходима авторизация' });
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    throw new FORBIDDEN_ERROR({ message: 'Необходима авторизация' });
  }

  req.user = payload;

  return next();
};
