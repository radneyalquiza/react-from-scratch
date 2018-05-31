import path from 'path';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './routes';

const app = express();

app.set('views', path.join(__dirname, './views'));
app.set(express.static(path.join(__dirname, './public')));
app.set('view engine', 'pug');

app.use(logger('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

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
