import express from "express";
import { genProduct } from "../service/genProduct";
import accountRouter from "./index/accountRouter";
import cartRouter from "./index/cartRouter";
import homeRouter from "./index/homeRouter";
import productRouter from "./index/productRouter";
const indexRouter = express.Router();

indexRouter.use("/", homeRouter);
indexRouter.use("/product", productRouter);
indexRouter.use("/cart", cartRouter);
indexRouter.use("/account", accountRouter);
indexRouter.get("/gen", (req, res) => {
    genProduct();
    res.render("error/errorCustom", {errorContent: "Đang generate dữ liệu"});
});

export default indexRouter;