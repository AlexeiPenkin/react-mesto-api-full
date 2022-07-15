const allowedCors = [
  'https://domainname.studens.nomorepartiesxyz.ru',
  'http://domainname.studens.nomorepartiesxyz.ru',
  'https://api.backend.nomoredomains.xyz',
  'http://api.backend.nomoredomains.xyz',
  'http://localhost:3000',
  'localhost:3000',
];

module.exports.cors = ((req, res, next) => {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }

  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Credentials', true);
  }

  const requestHeaders = req.headers['access-control-request-headers'];
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.header('Access-Control-Allow-Credentials', true);
  }

  next();
});
