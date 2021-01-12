import express from "express";
import passport from "passport";
const localStrategy = require("passport-local").Strategy;
import { getCart, getCheckout,addtoCart,removeFromCart, submitCart } from "../../controllers/cartController";
const cartRouter = express.Router();

cartRouter.get("/", getCart);
cartRouter.get("/remove/:id", removeFromCart);
// cartRouter.get("/checkout", getCheckout);

cartRouter.get("/checkout", (req, res, next) => {
    // neu da authenticat thi cho phep di vao trong
    if (req.isAuthenticated()) {
        next();
    }
    else
        res.render("error/authenticate");
}
, getCheckout);
cartRouter.post("/submit", submitCart);

cartRouter.get("/:id", addtoCart);

export default cartRouter;