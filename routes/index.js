import express from "express";
import { genService } from "../service/generateService";
import accountRouter from "./index/accountRouter";
import cartRouter from "./index/cartRouter";
import homeRouter from "./index/homeRouter";
import productRouter from "./index/productRouter";
const indexRouter = express.Router();

indexRouter.use("/", homeRouter);
indexRouter.use("/product", productRouter);
indexRouter.use("/cart", cartRouter);
indexRouter.use("/account", accountRouter);
indexRouter.get("/generate-data", genService);

export default indexRouter;