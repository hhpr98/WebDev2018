import { compile } from "morgan";
import { getAccount } from "../models/accountModels";
import { getBuyingMost, getRecentProduct, getCategoryLeftBar, getReviewOfCustomer } from "../models/homeModels";

// import { getAccount } from "../models/accountModels";
export const getAccountPage = (req, res) => {
  res.render("account/account", { title: "Tài khoản" });
};

export const getLoginPage = (req, res) => {
  res.render("account/login", { layout: "layout/loginlayout" });
};

export const postLoginPage = (req, res) => {
    var username=req.body.username;
    var pass=req.body.pass;
    var getAcc=getAccount();
    var account = getAcc.find( ele => ele.username === username);
    console.log(account);
    if(!account){
        res.render("account/login",{ Noti: "Người dùng không tồn tại",layout: "layout/loginlayout" });
        return;
    }
    if(account.password!==pass){
        res.render("account/login",{ Noti: "Bạn đã nhập sai mật khẩu", layout: "layout/loginlayout" })
        return;
    }
    res.render("home/index",{ title: "Trang chủ", buyingMost: getBuyingMost(), recentProduct: getRecentProduct(), categoryLeftBar: getCategoryLeftBar(), review: getReviewOfCustomer() });
  };

export const getRegisterPage = (req, res) => {
  res.render("account/register", { title: "Đăng nhập" });
};
