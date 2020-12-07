import { getUser1 } from "../models/accountModels";
import catchAsync from "../libs/catchAsync";

export const updateAvata = catchAsync(
    async (req, res) => {
        console.log("aaa");
        const user1 = await getUser1();
        console.log(user1);
        res.render("account/account", { title: "Tài khoản", user:user1[0]});
    }
);