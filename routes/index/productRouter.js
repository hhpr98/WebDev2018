import express from "express";
import { getProductDetailPage, getProductListByCategoryPage, getProductListPage } from "../../controllers/productController";
const productRouter = express.Router();

productRouter.get("/", getProductListPage);
productRouter.get("/category/:id", getProductListByCategoryPage);
productRouter.get("/detail/:id", getProductDetailPage);

export default productRouter;