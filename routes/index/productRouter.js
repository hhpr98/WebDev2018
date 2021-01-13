import express from "express";
import {
    getProductDetailPage,
    getProductListPageByCategoryPage,
    getProductListPage,
    getProductListPageBySearchText,
    addACommentAction,
    getAdvanceSearchPage,
    postAdvanceSearchPage
} from "../../controllers/productController";
const productRouter = express.Router();

productRouter.get("/", getProductListPage);
productRouter.get("/category/:id", getProductListPageByCategoryPage);
productRouter.get("/search", getProductListPageBySearchText);
productRouter.get("/detail/:id", getProductDetailPage);
productRouter.post("/comment/:id", addACommentAction);
productRouter.get("/advance-search", getAdvanceSearchPage);
productRouter.post("/advance-search/search", postAdvanceSearchPage);

export default productRouter;