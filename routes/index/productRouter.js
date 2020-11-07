import express from "express";
import { getProductDetailPage, getProductListPage, getProductListPagination } from "../../controllers/productController";
const productRouter = express.Router();

productRouter.get("/", getProductListPage);
productRouter.get("/page/:id", getProductListPagination);
productRouter.get("/detail/:id", getProductDetailPage);

export default productRouter;