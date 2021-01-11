import express from "express";
import { getCart, getCheckout,addtoCart,removeFromCart } from "../../controllers/cartController";
const cartRouter = express.Router();

cartRouter.get("/", getCart);
cartRouter.get("/checkout", getCheckout);
cartRouter.get("/:id", addtoCart);
cartRouter.get("/remove/:id", removeFromCart);
export default cartRouter;