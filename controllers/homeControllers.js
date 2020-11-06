import { getBuyingMost, getRecentProduct } from "../models/homeModels";

export const getHomePage = (req, res) => {
    res.render('home/index', { buyingMost: getBuyingMost(), recentProduct: getRecentProduct() });
}