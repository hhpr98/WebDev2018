import createError from "http-errors";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { registerHelper } from "./libs/hbsHelper";
import favicon from "serve-favicon";
import dotenv from "dotenv";
import indexRouter from "./routes/index";
import adminRouter from "./routes/admin";


var app = express(); // express 
dotenv.config(); // using dotenv file

// autenticat
import expressSession from "express-session";
var FileStore = require('session-file-store')(expressSession);

import passport from "passport";

app.use(expressSession({
  secret: "userCookieSecret",
  resave: false,
  saveUninitialized: false,
  secure:false,
  cookie:{maxAge: 3000000 // 5p ton tai
  }})); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layout/layout' });
app.use(favicon(__dirname + '/public/img/favicon.ico'));
// view engine helper
registerHelper();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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
  console.log(`http://localhost:${PORT}/`);
});