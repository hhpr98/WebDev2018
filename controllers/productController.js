import { getCategoryRightBar, getProductList } from "../models/productModels";

export const getProductListPage = (req, res) => {
    res.render("product/product-list", { title: "Danh sách sản phẩm", productList: getProductList(), category: getCategoryRightBar() });
}

export const getProductListPagination = (req, res) => {
    const pageId = req.params.id || "";
    if (pageId === "") {
        res.render("product/product-list", { title: "Danh sách sản phẩm", productList: getProductList(), category: getCategoryRightBar() });
    } else {
        res.render("product/product-list", { title: "Danh sách sản phẩm", productList: getProductList(), category: getCategoryRightBar() });
    }
}

export const getProductDetailPage = (req, res) => {
    const productId = req.params.id || "1";
    const listProduct = getProductList();
    const dataFind = listProduct.find(item => item.id.toString() === productId.toString());
    res.render("product/product-detail", { title: "Chi tiết sản phẩm", item: dataFind, productList: getProductList(), category: getCategoryRightBar() });
}