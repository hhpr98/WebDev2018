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
    var message = req.session.message;
    res.render("account/login", { title: "Đăng nhập", layout: "layout/loginlayout" });
  }
);
export const getRegisterPage = catchAsync(
  async (req, res) => {
    res.render("account/register", { title: "Đăng kí", layout: "layout/loginlayout" });
  }
);

const rerenderAcccounPage = catchAsync(
  async (req, res) => {
    // lay tam thong tin acc 
    const id = req.user;
    const user_info = await getAccountByID(id);
    res.render("account/account", { title: "Tài khoản", user: user_info, noti: req.session.message });
  }
);
export const getAccountPage = catchAsync(
  async (req, res) => {
    // lay tam thong tin acc 
    const id = req.user;
    const user_info = await getAccountByID(id);
    res.render("account/account", { title: "Tài khoản", user: user_info });
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
  async (req, res, filename, id) => {
    const file_src = "/img/uploads/" + filename;
    await updateUserImage(id, file_src);
    res.redirect("/account");
  }
);
export const updateInfo = catchAsync(
  async (req, res) => {
    const id = req.user;

    await updateUserInfoById(req.body.username, req.body.phone, req.body.email, req.body.address, id);
    res.redirect("/account");
  }
)
export const updatePassword = catchAsync(
  async (req, res) => {
    // temp id, truyeenf id sau khi authentica
    const account = await getNPIById(id);
    //
    if (bcrypt.compareSync(req.body.oldpw, account.pw))
      await updatePasswordById(req.body.newpw, id);
    else{
      req.session.message = 'Mật khẩu cũ không khớp!!';
      rerenderAcccounPage();
    }
          


      // chinh trong bang user nen id nay thuoc bang user

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
