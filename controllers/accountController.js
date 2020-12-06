import { getAccount } from "../models/accountModels";
import catchAsync from "../libs/catchAsync";

/* Tài khoản */
export const getAccountPage = catchAsync(
  async (req, res) => {
    res.render("account/account", { title: "Tài khoản" });
  }
);


/* Đăng nhập */
export const getLoginPage = catchAsync(
  async (req, res) => {
    res.render("account/login", { title: "Đăng nhập", layout: "layout/loginlayout" });
  }
);


export const postLoginPage = catchAsync(
  async (req, res) => {

    var username = req.body.username || "";
    var pass = req.body.pass || "";
    var getAcc = getAccount();
    var account = getAcc.find(ele => ele.username === username);
    // console.log(account);

    if (!account) {
      res.render("account/login", { title: "Đăng nhập", Noti: "Người dùng không tồn tại", layout: "layout/loginlayout" });
      return;
    }
    if (account.password !== pass) {
      res.render("account/login", { title: "Đăng nhập", Noti: "Bạn đã nhập sai mật khẩu", layout: "layout/loginlayout" })
      return;
    }

    res.redirect("/");

  }
);

/* Đăng kí */
export const getRegisterPage = catchAsync(
  async (req, res) => {
    res.render("account/register", { title: "Đăng kí", layout: "layout/loginlayout" });
  }
);


export const postRegisterPage = catchAsync(
  async (req, res) => {
    const pass = req.body.pass || "";
    const repass = req.body.repass || "";

    if (pass !== repass) {
      res.render("account/register", { title: "Đăng kí", Noti: "Mật khẩu nhập lại không khớp", layout: "layout/loginlayout" });
      return;
    }

    res.redirect("/");
  }
);