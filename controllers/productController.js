import { getCategoryRightBar, getProductDetail, getProductList, getReview } from "../models/productModels";

export const getProductListPage = async (req, res) => {
    const productList = await getProductList();
    res.render("product/product-list", { title: "Danh sách sản phẩm", productList, category: getCategoryRightBar() });
}

export const getProductListPagination = async (req, res) => {
    const pageId = req.params.id || "";
    const productList = await getProductList();

    if (pageId === "") {
        res.render("product/product-list", { title: "Danh sách sản phẩm", productList, category: getCategoryRightBar() });
    } else {
        res.render("product/product-list", { title: "Danh sách sản phẩm", productList, category: getCategoryRightBar() });
    }
}

export const getProductDetailPage = async (req, res) => {
    const productId = req.params.id || "1";
    const productList = await getProductList();
    const reviewList = getReview();
    const productDisplay = await getProductDetail(productId);
    if (productDisplay === null) {
        res.render("product/product-not-found", { title: "Chi tiết sản phẩm" });
    } else {
        res.render("product/product-detail", { title: "Chi tiết sản phẩm", item: productDisplay, productList, reviewList, category: getCategoryRightBar() });
    }
}