import express from "express";
import { getProductList } from "../controllers/productController";
const productRouter = express.Router();

productRouter.get("/", getProductList);

export default productRouter;