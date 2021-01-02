import { getUser1, saveUser1, getAccountByID, updateUserInfo, getAccountByUserName, addNewAccoutToDatabase } from "../models/accountModels";
import { updateUserPW, getUserByID } from "../models/userModels";

import catchAsync from "../libs/catchAsync";

//

/* Tài khoản */
export const getAccountPage = catchAsync(
  async (req, res) => {
    // lay tam thong tin acc 
    const user1 = await getAccountByID('4bd31be7-9e2a-481e-b285-8fe70fd49b6f');
    // lay tam thong tin user
    const user2 = await getUserByID('e61f8345-be67-45e9-9a53-8c6ab412d14b');
    res.render("account/account", { title: "Tài khoản", user: user1, pw: user2.password });
  }
);
// upload avata
export const updateAvata = catchAsync(
  // lay ra nguoi dung ( cap nhat sau)
  // chinh sua lai image, sau do luu lai vao db
  // render
  async (req, res, filename) => {
    const user1 = await getUser1();
    user1.image = "/img/uploads/" + filename;
    await saveUser1(user1.id, user1.image);
    res.redirect("/account");
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
exports.getAccountByPassword = catchAsync(

);
// module.exports = function getAccountPassword() = catchAsync(
//   async(accountName) =>{
//     console.log(accountName+ "controller");
//     const  pw = await getAccountByUserName(accountName);
//     // tamj thoi su dung phonenumber, vi bang nayk co pw
//     return pw;
//   }
// )
const getAccountPassword = catchAsync(
  async (accountName) => {
    console.log(accountName + "controller");
    const pw = await getAccountByUserName(accountName);
    // tamj thoi su dung phonenumber, vi bang nayk co pw
    return pw;
  }
)
export const postRegisterPage = catchAsync(
  async (req, res) => {
    const pass = req.body.pass || "";
    const repass = req.body.repass || "";

    if (pass !== repass) {
      res.render("account/register", { title: "Đăng kí", Noti: "Mật khẩu nhập lại không khớp", layout: "layout/loginlayout" });
      return;
    }
    // luu vao db
    await addNewAccoutToDatabase(req.body.username, req.body.pass, req.body.email);
    res.redirect("/login");
  }
);
// 
// update details
// update password
export const updatePassword = catchAsync(
  async (req, res) => {
    // temp id, truyeenf id sau khi authentica
    const id = "e61f8345-be67-45e9-9a53-8c6ab412d14b";
    // chinh trong bang user nen id nay thuoc bang user
    await updateUserPW(req.body.newpPssword, id);
    res.redirect("/account");
  }
)
// update info

export const updateInfo = catchAsync(
  async (req, res) => {
    //

    const id = '4bd31be7-9e2a-481e-b285-8fe70fd49b6f';
    //
    await updateUserInfo(req.body.userName, req.body.userPhone, req.body.userEmail, req.body.userAddress, id);
    res.redirect("/account");
  }
)
// export const createNewAccount = catchAsync(
//   async (req, res, username, password, email)=>{
//     await addNewAccoutToDatabase(username, password, email);
//     res.redirect("/login",{ title: "Đăng nhập",  layout: "layout/loginlayout" });
//   }
// )
