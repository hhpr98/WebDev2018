import catchAsync from "../libs/catchAsync";

import { getListProductInCart } from "../models/productModels";
import {getAccountByID}   from "../models/accountModels";
import {addCart} from "../models/cartModels";
export const getCart = catchAsync(
    async (req, res) => {
        if (req.session.cart)
            var a = await getListProductInCart(req.session.cart);
      
        res.render("cart/cart", { title: "Giỏ hàng", cartItem: a});
    }
);


export const getCheckout = catchAsync(
    async (req, res) => {
        if (req.session.cart)
            var a = await getListProductInCart(req.session.cart);
        const id = req.user;
        const user_info = await getAccountByID(id);
        var message = req.session.valid;
        req.session.valid = null;
        res.render("cart/checkout", { title: "Thanh toán", cartItem: a, user:user_info, Noti:message});
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
        var  json = {"id": req.params.id, "num":1};
        cart.push(json);
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
        const array = req.body;
        var item = [];

        for(var element in array){
            var temp = element.toString();
            if(temp!= "address1" && temp!="payment" && temp!= "address2")
                item.push({"id": element, "amount": array[element]});
        }
        const to = array.address1 +  array.address2;
        await addCart(item, to);
        req.session.valid = "Đã tạo đơn hàng thành công!";
        res.redirect("/cart/checkout");

    }
);