import { getBuyingMost, getRecentProduct, getCategoryLeftBar, getReviewOfCustomer } from "../models/homeModels";

export const getHomePage = (req, res) => {
    res.render("home/index", { title: "Trang chủ", buyingMost: getBuyingMost(), recentProduct: getRecentProduct(), categoryLeftBar: getCategoryLeftBar(), review: getReviewOfCustomer() });
}

export const getWishlistPage = (req, res) => {
    res.render("other/wishlist", { title: "Wishlist Page" });
}

export const getContactPage = (req, res) => {
    res.render("other/contact", { title: "Liên hệ" });
}