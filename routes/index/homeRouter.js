import express from "express";
import { getContactPage, getHomePage, getWishlistPage } from "../../controllers/homeControllers";
const homeRouter = express.Router();

homeRouter.get("/", getHomePage);
homeRouter.get("/wishlist", getWishlistPage);
homeRouter.get("/contact", getContactPage);

export default homeRouter;