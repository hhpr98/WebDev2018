import {
  getAccountByID,
  updateUserImage,
  getAccountByUserName,
  addAccount,
  updateUserInfoById,
  updatePasswordById,
  getNPIById
} from "../models/accountModels";
import bcrypt from "bcrypt";

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
export const logoutAccount = catchAsync(
  async (req, res) => {
    req.logout();
    res.redirect('/');
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
    await addAccount(req.body.username, req.body.pass, req.body.email);
    res.redirect("/login");
  }
);
