import { getUser1,saveUser1, getUserByID, updateUserInfo  } from "../models/accountModels";
import catchAsync from "../libs/catchAsync";

/* Tài khoản */
export const getAccountPage = catchAsync(
  async (req, res) => {
    const user1 = await getUserByID('4bd31be7-9e2a-481e-b285-8fe70fd49b6f');
    res.render("account/account", { title: "Tài khoản" ,  user:user1});
  }
);
// upload avata
export const updateAvata = catchAsync(
  // lay ra nguoi dung ( cap nhat sau)
  // chinh sua lai image, sau do luu lai vao db
  // render
    async (req, res, filename) => {
      const user1 = await getUser1();
      user1.image = "/img/uploads/"+filename;
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

// update details
// update password


// update info

export const updateInfo = catchAsync(
  async(req, res) => {
    //

    const id = '4bd31be7-9e2a-481e-b285-8fe70fd49b6f';
    //
    await updateUserInfo(req.body.userName, req.body.userPhone, req.body.userEmail, req.body.userAddress, id);
    res.redirect("/account");
    }
)
