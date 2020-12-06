import { Products, Categories } from "../database/models";

export const getProductListDatabase = async (limit, page) => {

    const _product = await Products.findAndCountAll({
        where: {
            isDeleted: 0
        },
        limit: limit,
        offset: limit * (page - 1)
    });

    return _product;
}

export const getProductListDatabaseByCategory = async (limit, page, type) => {

    const _product = await Products.findAndCountAll({
        where: {
            isDeleted: 0,
            type: type
        },
        limit: limit,
        offset: limit * (page - 1)
    });

    return _product;
}

export const getProductDetailDatabase = async (id) => {

    const _product = await Products.findByPk(id);

    return _product;

}
export const getCategoryDatabase = async () => {

    const _category = await Categories.findAll({
        where: {
            isDeleted: 0
        }
    });

    return _category;
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