import express from "express";
import { getProductDetailPage, getProductListPage } from "../../controllers/productController";
const productRouter = express.Router();

productRouter.get("/", getProductListPage);
productRouter.get("/detail/:id", getProductDetailPage);

export default productRouter;