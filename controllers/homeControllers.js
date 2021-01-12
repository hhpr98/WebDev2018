import { getBuyingMost, getRecentProduct, getCategoryLeftBar, getReviewOfCustomer } from "../models/homeModels";
import catchAsync from "../libs/catchAsync";

export const getHomePage = catchAsync(
    async (req, res) => {
        const categoryLeftBar = getCategoryLeftBar();
        const recentProduct = await getRecentProduct();
        const buyingMost = await getBuyingMost();
        res.render("home/index", { title: "Trang chủ", buyingMost, recentProduct, categoryLeftBar, review: getReviewOfCustomer() });
    }
);

export const getWishlistPage = catchAsync(
    async (req, res) => {
        res.render("other/wishlist", { title: "Yêu thích" });
    }
);

export const getContactPage = catchAsync(
    async (req, res) => {
        res.render("other/contact", { title: "Liên hệ" });
    }
);


