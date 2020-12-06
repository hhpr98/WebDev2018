import { getBuyingMost, getRecentProduct, getCategoryLeftBar, getReviewOfCustomer } from "../models/homeModels";
import catchAsync from "../libs/catchAsync";

export const getHomePage = catchAsync(
    async (req, res) => {
        res.render("home/index", { title: "Trang chủ", buyingMost: getBuyingMost(), recentProduct: getRecentProduct(), categoryLeftBar: getCategoryLeftBar(), review: getReviewOfCustomer() });
    }
);

export const getWishlistPage = catchAsync(
    async (req, res) => {
        res.render("other/wishlist", { title: "Wishlist Page" });
    }
);

export const getContactPage = catchAsync(
    async (req, res) => {
        res.render("other/contact", { title: "Liên hệ" });
    }
);