import express from "express";
import { getCart, getCheckout,addtoCart } from "../../controllers/cartController";
const cartRouter = express.Router();

cartRouter.get("/", getCart);
cartRouter.get("/checkout", getCheckout);
cartRouter.get("/:id", addtoCart);
export default cartRouter;