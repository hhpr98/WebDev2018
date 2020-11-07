export const getAccountPage = (req, res) => {
    res.render("account/account", { title: "Tài khoản" });
}

export const getLoginPage = (req, res) => {
    res.render("account/login", { title: "Đăng kí" });
}

export const getRegisterPage = (req, res) => {
    res.render("account/login", { title: "Đăng nhập" });
}