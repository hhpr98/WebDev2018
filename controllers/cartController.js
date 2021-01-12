import catchAsync from "../libs/catchAsync";

import { getListProductInCart } from "../models/productModels";
import {getAccountByID}   from "../models/accountModels";
export const getCart = catchAsync(
    async (req, res) => {
        if (req.session.cart)
            var a = await getListProductInCart(req.session.cart);
        res.render("cart/cart", { title: "Giỏ hàng", cartItem: a });
    }
);


export const getCheckout = catchAsync(
    async (req, res) => {
        if (req.session.cart)
            var a = await getListProductInCart(req.session.cart);
        const id = req.user;
        const user_info = await getAccountByID(id);
        res.render("cart/checkout", { title: "Thanh toán", cartItem: a, user:user_info });
    }
);
export const addtoCart = catchAsync(
    async (req, res) => {
        var cart;
        if (req.session.cart) {
            cart = req.session.cart;
        } else {
            req.session.cart = [];
            cart = req.session.cart;
        }
        cart.push(req.params.id);
        console.log("add to cart");
        res.redirect("/");
    }
)
export const removeFromCart = catchAsync(
    async (req, res) => {
        var cart;
        if (req.session.cart) {
            cart = req.session.cart;
            var index = cart.indexOf(req.params.id);
            if (index > -1) {
                cart.splice(index, 1);
            }
            var a = await getListProductInCart(req.session.cart);
            res.redirect("/cart");

        } else {
            res.redirect("/");
        }
    }
);
export const submitCart = catchAsync(
    async (req, res) => {
        res.render("cart/checkout", { title: "Đơn hàng" });
    }
);