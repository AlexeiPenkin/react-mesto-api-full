const jwt = require('jsonwebtoken');
const FORBIDDEN_ERROR = require('../errors/forbidden-error');

const MAGIC_KEY = 'magic-key';

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new FORBIDDEN_ERROR({ message: 'Необходима авторизация' });
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, MAGIC_KEY);
  } catch (err) {
    throw new FORBIDDEN_ERROR({ message: 'Необходима авторизация' });
  }

  req.user = payload;

  return next();
};
