import express from "express";
import { getProductDetail, getProductList } from "../../controllers/productController";
const productRouter = express.Router();

productRouter.get("/", getProductList);
productRouter.get("/detail/:id", getProductDetail);

export default productRouter;