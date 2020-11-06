import express from "express";
import homeRouter from "./homeRouter";
import productRouter from "./productRouter";
const indexRouter = express.Router();

indexRouter.use("/", homeRouter);
indexRouter.use("/product", productRouter);

export default indexRouter;