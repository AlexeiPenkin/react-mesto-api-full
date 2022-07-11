require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cookie = require('cookie-parser');
const { createUser, login } = require('./controllers/users');
const auth = require('./middlewares/auth');
const users = require('./routes/users');
const cards = require('./routes/cards');
const { createUserValidation, loginValidation } = require('./middlewares/validation');
const NOT_FOUND_ERROR = require('./errors/notfound-error');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
const app = express();
app.use(cookie());

console.log(process.env.NODE_ENV);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const allowedCors = [
  'https://domainname.studens.nomorepartiesxyz.ru',
  'http://domainname.studens.nomorepartiesxyz.ru',
  'localhost:3000',
];

app.use((req, res, next) => {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
  }

  const requestHeaders = req.headers['access-control-request-headers'];
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Headers', requestHeaders);
  }

  next();
});

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signup', createUserValidation, createUser);

app.post('/signin', loginValidation, login);

app.use(auth);

app.use('/users', users);

app.use('/cards', cards);

app.use(errorLogger);

app.use(errors());

app.use('/*', (req, res, next) => next(new NOT_FOUND_ERROR('Страницы не существует')));

/* eslint-disable-next-line */
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? 'На сервере произошла ошибка' : message });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
