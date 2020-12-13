import { Products, Categories, Op } from "../database/models";

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

export const getProductListDatabaseBySearchText = async (limit, page, text) => {

    const _product = await Products.findAndCountAll({
        where: {
            isDeleted: 0,
            name: {
                [Op.like]: `%${text}%`
            }
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

export const getBranchs = () => {
    return [
        {
            id: 1,
            name: "Adidas",
            number: 3
        },
        {
            id: 2,
            name: "A&D",
            number: 2
        },
        {
            id: 3,
            name: "MN Corp",
            number: 5
        },
        {
            id: 4,
            name: "Nike",
            number: 13
        },
        {
            id: 5,
            name: "Fusce",
            number: 7
        },
        {
            id: 6,
            name: "Khác",
            number: 2
        }
    ]
}

export const getTags = () => {
    return [
        {
            id: 1,
            name: "Đồ nam"
        },
        {
            id: 2,
            name: "Hàng hiệu"
        },
        {
            id: 3,
            name: "Hô ly gút"
        },
        {
            id: 4,
            name: "Đỏ"
        },
        {
            id: 5,
            name: "Đầm ngắn"
        },
        {
            id: 6,
            name: "Váy diện ngang"
        },
        {
            id: 7,
            name: "Noel"
        },
        {
            id: 8,
            name: "Người yêu"
        },
        {
            id: 9,
            name: "Quần áo"
        },
        {
            id: 10,
            name: "Mũ len"
        },
        {
            id: 11,
            name: "Tây ba lô"
        },
        {
            id: 12,
            name: "Hello world"
        },
        {
            id: 13,
            name: "Cặp đôi"
        },
        {
            id: 14,
            name: "Mùa đông"
        }
    ]
}