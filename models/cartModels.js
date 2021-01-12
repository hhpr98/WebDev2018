import { Carts, Products, CartDetails } from "../database/models";
import { v4 as uuid } from "uuid";

export const addCart = async (totalamount, to) => {
    const cartId = uuid();
    await Carts.create({
        id: cartId,
        totalAmount: totalamount,
        cartNote: to
    });
    var a;
    await CartDetails.create({
        id: uuid(),
        cardId: cartId,
        productId:a ,

       amount: 1
    });
}