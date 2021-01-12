import express from "express";
// for authenticate
import bcrypt from "bcrypt";
import passport from "passport";
const localStrategy = require("passport-local").Strategy;

// local
import { genService } from "../service/generateService";
import accountRouter from "./index/accountRouter";
import cartRouter from "./index/cartRouter";
import homeRouter from "./index/homeRouter";
import productRouter from "./index/productRouter";
import { getAccountAuthenticate, getLoginPage, getRegisterPage, postRegisterPage, getResetPasswordPage, resetPassword } from "../controllers/accountController"
// const SALT_ROUNDS = 10;

const indexRouter = express.Router();

//                              //////parent route
indexRouter.use("/", homeRouter);
indexRouter.use("/product", productRouter);
indexRouter.use("/cart", cartRouter);
indexRouter.use("/account", (req, res, next) => {
    // neu da authenticat thi cho phep di vao trong
    if (req.isAuthenticated()) {
        next();
    }
    else
        res.render("error/authenticate");
}, accountRouter);
indexRouter.get("/generate-data", genService);

indexRouter.post("/match", function(req, res) {
    console.log("Route Test1: " + req.body.username);
    req.session.valid = "Mật khẩu hoặc tài khoản không đúng";
    
 });

//                          /////////////login route//////////
indexRouter.route("/login")
    .get(getLoginPage)
    // .post(passport.authenticate("local", { failureRedirect: "/login", successRedirect: "/",failureFlash : true}));
    .post(function (req, res, next) {
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                req.session.valid = "Mật khẩu hoặc tài khoản không đúng";
                return res.redirect('/login');
            }
            req.logIn(user, function (err) {


                if (err) {
                    return next(err);
                }
                return res.redirect('/');
            });
        })(req, res, next);
    });
passport.authenticate('local', { failureFlash: 'Invalid username or password.' });
// check tài khoản để login vào
passport.use(new localStrategy( // này để passport dùng
    async (username, password, done) => {
        // lay tu db ra password tuong ung voi username, neu khong co thi la "";
        var account;
        try {
            account = await getAccountAuthenticate(username);
        }
        catch (err) {
            console.log("Err while getting password from db!!")
        }

        if (account == null) {
            return done(null, false);
        }
        else {
            if (bcrypt.compareSync(password, account.pw)) {
                return done(null, account.id);
            }
            else {
                return done(null, false);
            }
        }
    }
))
passport.serializeUser((id, done) => {
    // ghi vao session
    done(null, id);
})
passport.deserializeUser((id, done) => {

    //deserializeUser để kiểm tra thông tin người dùng mỗi khi người dùng access vào các tài nguyên khác (/private). Vì lúc này thông tin xác thực đã được generate ra một session và được lưu trong cookies  của trình duyệt.
    if (id != null) {
        return done(null, id);
    }
    else {
        return done(null, false);
    }
})

// register route 
indexRouter.get("/register", getRegisterPage);
indexRouter.post("/register", postRegisterPage);
// forgot password
indexRouter.get("/resetpw", getResetPasswordPage);
indexRouter.post("/resetpw", resetPassword);

export default indexRouter;