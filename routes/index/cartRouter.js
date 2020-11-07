import express from "express";
import { getCart, getCheckout } from "../../controllers/cartController";
const cartRouter = express.Router();

cartRouter.get("/", getCart);
cartRouter.get("/checkout", getCheckout);

export default cartRouter;