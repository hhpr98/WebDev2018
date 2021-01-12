import express from "express";
import {
    getProductDetailPage,
    getProductListPageByCategoryPage,
    getProductListPage,
    getProductListPageBySearchText,
    addACommentAction
} from "../../controllers/productController";
const productRouter = express.Router();

productRouter.get("/", getProductListPage);
productRouter.get("/category/:id", getProductListPageByCategoryPage);
productRouter.get("/search", getProductListPageBySearchText);
productRouter.get("/detail/:id", getProductDetailPage);
productRouter.post("/comment/:id", addACommentAction);

export default productRouter;