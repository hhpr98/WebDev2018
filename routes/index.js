import express from "express";

// authenticate
import passport from "passport";
// import localStrategy from "passport-local";
const localStrategy = require("passport-local").Strategy;
// import expressSession from "express-session";

import { genService } from "../service/generateService";
import accountRouter from "./index/accountRouter";
import cartRouter from "./index/cartRouter";
import homeRouter from "./index/homeRouter";
import productRouter from "./index/productRouter";
import uploadRouter from "./index/uploadRouter";
import { getLoginPage, getRegisterPage, postRegisterPage, getAccountPassword } from "../controllers/accountController"
// import "../controllers/accountController"
const indexRouter = express.Router();

indexRouter.use("/", homeRouter);
indexRouter.use("/product", productRouter);
indexRouter.use("/cart", cartRouter);
indexRouter.use("/account", (req, res, next) => {
    // neu da authenticat thi cho phep di vao trong
    if (req.isAuthenticated()) {
        next();
    }
    else
        res.send("ban chua dang nhapnpm ")
}, accountRouter);
indexRouter.get("/generate-data", genService);
indexRouter.use("/upload", uploadRouter);

// login route
indexRouter.route("/login")
    .get(getLoginPage)
    .post(passport.authenticate("local", { failureRedirect: "/login", successRedirect: "/" }));

// check tài khoản để login vào
passport.use(new localStrategy( // này để passport dùng

    async (username, password, done) => {
        console.log(username + " " + password);
        // lay tu db ra password tuong ung voi username, neu khong co thi la "";
        // var pwfromDB= "01643681993";
        var pwfromDB;
        try {
            pwfromDB = await getAccountPassword(username);// chỗ này nè a
        }
        catch (err) {
            console.log("Err while getting password from db!!1111111")
        }
        if (password == pwfromDB) {
            const memory = { username, password };
            return done(null, memory);
        }
        else {
            return done(null, false);
        }
    }
))
passport.serializeUser((username, done) => {
    // ghi vao session
    done(null, username);
})
passport.deserializeUser((username, done) => {

    //deserializeUser để kiểm tra thông tin người dùng mỗi khi người dùng access vào các tài nguyên khác (/private). Vì lúc này thông tin xác thực đã được generate ra một session và được lưu trong cookies  của trình duyệt.
    // neeus ton tai ==  da dang nhap
    // hoac lay tai khoan trong db ra so sanh tiep    
    if (username != null) {
        return done(null, username);
    }
    else {
        return done(null, false);
    }
})

// register route 
indexRouter.get("/register", getRegisterPage);
indexRouter.post("/register", postRegisterPage);
//



export default indexRouter;