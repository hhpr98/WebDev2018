import { Carts, Products, CartDetails } from "../database/models";
import { v4 as uuid } from "uuid";

const addItemToCartDetail = async(cartId, id, amount)=>{
    await CartDetails.create({
        id: uuid(),
        cardId: cartId,
        productId: id,
        amount: amount
    });
}
export const addCart = async (item, address) => {
    const cartId = uuid();
    var total = 0;
    for(i of item){
        total += parseInt(i.amount, 10);;
    }
    await Carts.create({
        id: cartId,
        totalAmount: total,
        cartNote: address
    });
    for(var i of item){
        await addItemToCartDetail(cartId, i.id, i.amount);
    }   
}