import { getCategoryRightBar, getProductList } from "../models/productModels";

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

export const getProductDetailPage = (req, res) => {
    const productId = req.params.id || "1";
    const listProduct = getProductList();
    const dataFind = listProduct.find(item => item.id.toString() === productId.toString());
    if (typeof (dataFind) === "undefined") {
        res.render("product/product-not-found", { title: "Chi tiết sản phẩm" });
    } else {
        res.render("product/product-detail", { title: "Chi tiết sản phẩm", item: dataFind, productList: getProductList(), category: getCategoryRightBar() });
    }
}