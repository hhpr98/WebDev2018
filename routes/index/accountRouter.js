import express from "express";
import passport from "passport";
// import localStrategy from "passport-local";
const localStrategy = require("passport-local").Strategy;
import expressSession from "express-session";

import getAccountPassword, { getAccountPage, getLoginPage, getRegisterPage, postLoginPage, postRegisterPage, updateInfo, updatePassword } from "../../controllers/accountController";
const accountRouter = express.Router();

accountRouter.get("/", getAccountPage);
// accountRouter.get("/login", getLoginPage);
// accountRouter.post("/login", postLoginPage);

accountRouter.post("/updateinfo",updateInfo);
accountRouter.post("/updatePw",updatePassword);



export default accountRouter;