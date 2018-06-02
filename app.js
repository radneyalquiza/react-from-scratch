import path from 'path';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import webpackDevServer from './webpack/dev-server';
import router from './routes';

if (process.env.NODE_ENV !== 'production') {
  dotenv.load();
}

const app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

if (process.env.NODE_ENV !== 'production') {
  webpackDevServer(app);
}

app.use(logger('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, './public')));
app.use('/', router);

// catch 404 and forward to an error handler (below)
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
  next();
});

export default app;
