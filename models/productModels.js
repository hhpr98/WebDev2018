import { Products } from "../database/models";

export const getProductList = async () => {
    const product = await Products.findAll();
    // console.log(product);
    return product;
}


export const getProductDetail = async (id) => {
    const product = await Products.findByPk(id);
    return product;
}

export const getReview = () => {
    return [
        {
            reviewId: 1,
            reviewName: "Phở Thị Nở",
            reviewDate: "2021-01-01",
            reviewStar: 5,
            reviewContent: "Sản phẩm đẹp, bền"
        },
        {
            reviewId: 2,
            reviewName: "Hòa Nguyễn",
            reviewDate: "2021-01-01",
            reviewStar: 5,
            reviewContent: "Khá thoải mái, tôi thích!"
        }
    ]
}

export const getCategoryRightBar = () => {
    return [
        {
            id: 1,
            name: "Thời gian & đẹp",
            iclass: "fa fa-female",
            ihref: "/"
        },
        {
            id: 2,
            name: "Trẻ em",
            iclass: "fa fa-child",
            ihref: "/"
        },
        {
            id: 3,
            name: "Đồ cho Nam & Nữ",
            iclass: "fa fa-tshirt",
            ihref: "/"
        },
        {
            id: 4,
            name: "Phụ kiện",
            iclass: "fa fa-mobile-alt",
            ihref: "/"
        },
        {
            id: 5,
            name: "Hàng dịch vụ",
            iclass: "fa fa-microchip",
            ihref: "/"
        }
    ]
}