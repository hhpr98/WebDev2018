import { getAccount } from "../models/accountModels";
import { getBuyingMost, getRecentProduct, getCategoryLeftBar, getReviewOfCustomer } from "../models/homeModels";

export const getAccountPage = (req, res) => {
  res.render("account/account", { title: "Tài khoản" });
};

/* Đăng kí */
export const getLoginPage = (req, res) => {
  res.render("account/login", { title: "Đăng nhập", layout: "layout/loginlayout" });
};

export const postLoginPage = (req, res) => {
  var username = req.body.username;
  var pass = req.body.pass;
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
  res.render("home/index", { title: "Trang chủ", buyingMost: getBuyingMost(), recentProduct: getRecentProduct(), categoryLeftBar: getCategoryLeftBar(), review: getReviewOfCustomer() });
};

/* Đăng nhập */
export const getRegisterPage = (req, res) => {
  res.render("account/register", { title: "Đăng kí", layout: "layout/loginlayout" });
};

export const postRegisterPage = (req, res) => {
  const pass = req.body.pass || "";
  const repass = req.body.repass || "";

  if (pass !== repass) {
    res.render("account/register", { title: "Đăng kí", Noti: "Mật khẩu nhập lại không khớp", layout: "layout/loginlayout" });
    return;
  }

  res.render("home/index", { title: "Trang chủ", buyingMost: getBuyingMost(), recentProduct: getRecentProduct(), categoryLeftBar: getCategoryLeftBar(), review: getReviewOfCustomer() });
};