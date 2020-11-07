export const getProductList = (req, res) => {
    res.render("product/product-list", { title: "Danh sách sản phẩm" });
}

export const getProductDetail = (req, res) => {
    res.render("product/product-detail", { title: "Chi tiết sản phẩm" });
}