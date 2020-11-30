import { getBuyingMost, getRecentProduct, getCategoryLeftBar, getReviewOfCustomer } from "../models/homeModels";
import catchAsync from "../libs/catchAsync";
import { Products } from "../database/models";

export const getHomePage = catchAsync(
    async (req, res) => {

        // Test data on db
        // const allproducts = await Products.findAll();
        // console.log("all",allproducts);

        res.render("home/index", { title: "Trang chủ", buyingMost: getBuyingMost(), recentProduct: getRecentProduct(), categoryLeftBar: getCategoryLeftBar(), review: getReviewOfCustomer() });
    }
);

export const getWishlistPage = (req, res) => {
    res.render("other/wishlist", { title: "Wishlist Page" });
}

export const getContactPage = (req, res) => {
    res.render("other/contact", { title: "Liên hệ" });
}