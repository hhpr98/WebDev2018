import express from "express";
import accountRouter from "./index/accountRouter";
import cartRouter from "./index/cartRouter";
import homeRouter from "./index/homeRouter";
import productRouter from "./index/productRouter";
const indexRouter = express.Router();

indexRouter.use("/", homeRouter);
indexRouter.use("/product", productRouter);
indexRouter.use("/cart", cartRouter);
indexRouter.use("/account", accountRouter);

export default indexRouter;