import express from "express";
import passport from "passport";
import multer from "multer";

// import localStrategy from "passport-local";
const localStrategy = require("passport-local").Strategy;
import expressSession from "express-session";

import { 
    getAccountPage,
    getLoginPage,
    getRegisterPage,
    postLoginPage,
    postRegisterPage,
    updateInfo,
    updatePassword,
    logoutAccount,
    updateAvata,
    verifyAccount
} from "../../controllers/accountController";

const accountRouter = express.Router();

accountRouter.get("/", getAccountPage)
accountRouter.get("/logout", logoutAccount); 
accountRouter.post("/updateinfo",updateInfo);
accountRouter.post("/updatePw",updatePassword);
accountRouter.post("/verify",verifyAccount);







const uploadRouter = express.Router();

// này set store để lưu hình
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/uploads')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  }) 
  var upload = multer({ storage: storage })
  // upload/avata, can cap nhat id theo id nguoi dung
  accountRouter.post('/updateAvata', upload.single('file'),(req, res)=>{
    updateAvata(req, res, req.file.originalname);
})


export default accountRouter;