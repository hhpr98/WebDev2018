export const getCart = (req, res) => {
    res.render("cart/cart", { title: "Giỏ hàng" });
}

export const getCheckout = (req, res) => {
    res.render("cart/checkout", { title: "Đơn hàng" });
}