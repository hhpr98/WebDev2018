import catchAsync from "../libs/catchAsync";

import {getListProductInCart} from "../models/productModels";

export const getCart = catchAsync(
    async (req, res) => {
        if(req.session.cart)
            var a = await getListProductInCart(req.session.cart);
        res.render("cart/cart", { title: "Giỏ hàng", cartItem: a});
    }
);

export const getCheckout = catchAsync(
    async (req, res) => {
        res.render("cart/checkout", { title: "Đơn hàng" });
    }
);
export const addtoCart = catchAsync(
    async(req, res) =>{
        var cart;
        if (req.session.cart) {
            cart = req.session.cart;
        } else {
            req.session.cart = [];
            cart = req.session.cart;
        }
        cart.push(req.params.id);
        console.log(req.session.cart);
        cart.forEach(element => {
            console.log("elememt" + element);
        });
        res.redirect("/");
    }
)