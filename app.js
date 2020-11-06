import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import hbs from "hbs";

import indexRouter from "./routes/index";
import adminRouter from "./routes/admin";

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layout/layout' });
// view engine helper
hbs.registerHelper("formatCurencyVND", function (price) {
  return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error/error');
});

// PORT INIT
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`App is running at PORT ${PORT}`);
});
