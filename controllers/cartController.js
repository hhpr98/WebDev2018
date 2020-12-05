import catchAsync from "../libs/catchAsync";
import cathAsync from "../libs/catchAsync";

export const getCart = cathAsync(
    async (req, res) => {
        res.render("cart/cart", { title: "Giỏ hàng" });
    }
);

export const getCheckout = catchAsync(
    async (req, res) => {
        res.render("cart/checkout", { title: "Đơn hàng" });
    }
);