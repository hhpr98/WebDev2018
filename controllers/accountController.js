import {
  getAccountByID,
  updateUserImage,
  getAccountByUserName,
  addAccount,
  updateUserInfoById,
  updatePasswordById,
  getNPIById,
  getVerifyCodeById,
  verifyAccountById,
  getAccoutNPEByUsername
} from "../models/accountModels";
import bcrypt from "bcrypt";

import mailer from "./mailer";


const SALT_ROUNDS = 10;
import catchAsync from "../libs/catchAsync";

// get layout
export const getLoginPage = catchAsync(
  async (req, res) => {
    // var noti = req.flash('loginMessage')[0];
    var message = req.session.valid;
    req.session.valid = null;
    res.render("account/login", { title: "Đăng nhập", layout: "layout/loginlayout" , Noti:message});
  }
);

export const getResetPasswordPage = catchAsync(
  async (req, res) => {
    var message = req.session.valid;
    req.session.valid = null;
    res.render("account/forgotPassword", { title: "Quên mật khẩu", layout: "layout/loginlayout", Noti:message});
  }
);
export const getRegisterPage = catchAsync(
  async (req, res) => {
    res.render("account/register", { title: "Đăng kí", layout: "layout/loginlayout" });
  }
);

export const getAccountPage = catchAsync(
  async (req, res) => {
    var message = req.session.valid;
    req.session.valid = null;
    // lay tam thong tin acc
    const id = req.user;
    const user_info = await getAccountByID(id);
    res.render("account/account", { title: "Tài khoản", user: user_info, noti:message});
  }
);

// get
export const getAccountAuthenticate = async (accountName) => {
  const pw = await getAccountByUserName(accountName);
  return pw;
}


// action
export const resetPassword = catchAsync(
  async (req, res) => {
    const name = req.body.username;
    const data = await getAccoutNPEByUsername(name);
    //
    if(data!=null){
      const body = "<h2>Dear <b style = 'color:red;'>" + data.un + "</b> !</h2>"
      + "<h4>We have create new password for you,</h4>"
      + "<h4>Your new PASSWORD is: </h4>"
      + "<h3 style='color:white;background-color:black;width:200px;font-size:20px;'>" + data.npw + "</h3>"
      + "<p>You can use it to login into your account<p>"
      + "<p>And change your password back as your choise<p>";
      await mailer.sendMail(data.e, "Reset Password", body);
      req.session.valid = "Đã gửi vào mail người dùng";
      res.redirect("/login");

    }
    else{
      req.session.valid = "Tên tài khoản không hợp lệ";
      res.redirect("/resetpw");
    }
  })
export const logoutAccount = catchAsync(
  async (req, res) => {
    req.logout();
    res.redirect('/');
  }
)
export const verifyAccount = catchAsync(
  async (req, res) => {
    const id = req.user;
    const code = await getVerifyCodeById(id);
    //
    if (req.body.otp == code.toString()){
      await verifyAccountById(id);
      req.session.valid = "Đã xác thực tài khoản";
    }
      
    else{
      req.session.valid = 'Mã OTP không khớp';
    }
      res.redirect("/account");
  }
)
// update
export const updateAvata = catchAsync(
  async (req, res, filename) => {
    const id = req.user;
    const file_src = "/img/uploads/" + filename;
    await updateUserImage(id, file_src);
    res.redirect("/account");
  }
);
export const updateInfo = catchAsync(
  async (req, res) => {
    const id = req.user;
    req.session.valid = "Đã cập nhật thông tin tài khoản";

    await updateUserInfoById(req.body.username, req.body.phone, req.body.email, req.body.address, id);
    res.redirect("/account");
  }
)
export const updatePassword = catchAsync(
  async (req, res) => {
    const id = req.user;
    const account = await getNPIById(id);
    //
    if (bcrypt.compareSync(req.body.oldpw, account.pw)){
      await updatePasswordById(req.body.newpw, id);
      req.session.valid = "Đã cập nhật mật khẩu";
    }
      
    else{
      req.session.valid = 'Mật khẩu cũ không khớp!!';
    }
      res.redirect("/account");
  }
)

////


export const postRegisterPage = catchAsync(
  async (req, res) => {
    const pass = req.body.pass || "";
    const repass = req.body.repass || "";

    if (pass !== repass) {
      res.render("account/register", { title: "Đăng kí", Noti: "Mật khẩu nhập lại không khớp", layout: "layout/loginlayout" });
      return;
    }
    // luu vao db
    const ran = Math.floor(Math.random() * 1000000);
    const _code = ran.toString().padStart(6, "0"); // đúng 6 chữ số , nếu k đủ thêm các số 0 vào đầu
    await addAccount(req.body.username, req.body.pass, req.body.email, _code);
    // lay ra id, hash sau do gui ve email
    const body = "<h2>Dear <b style = 'color:red;'>" + req.body.username + "</b> !</h2>"
    + "<p>You must be entered your OTP to verify the transaction!<p>"
    + "<h4>Your code is: </h4>"
    + "<h3 style='color:white;background-color:black;width:200px;font-size:20px;'>" + _code + "</h3>"
    + "<p>Enter the Account Page to confirm verify code<p>";
    await mailer.sendMail(req.body.email, "Verify Account", body);
    res.redirect("/login");
  }
);
