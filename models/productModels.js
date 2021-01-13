import { Products, Categories, Op, Comments } from "../database/models";

export const getListProductInCart = async (array) => {
    const a = [];
    array.forEach(element => {
        a.push(element.id);
    });
    const _product = await Products.findAll({
        where: {
            id: a
        },
    });
    return _product;
}

// Lấy danh sách sản phẩm
// Input : limit, page
// Result: count + list sản phẩm
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

// Lấy danh sách sản phẩm dựa vào phân loại
// Input : limit, page, loại sản phẩm
// Result: count + list sản phẩm
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

// Lấy danh sách sản phẩm dựa vào từ khóa tìm kiếm
// Input : limit, page, search text
// Result: count + list sản phẩm
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

// Lấy thông tin chi tiết 1 sản phẩm
// Input : id sản phẩm
// Result: chi tiết sản phẩm
export const getProductDetailDatabase = async (id) => {

    // increase view count
    await Products.increment({
        viewCount: +1
    }, {
        where:
        {
            id: id
        }
    });

    // get detail 
    const _product = await Products.findByPk(id);

    return _product;

}

// Lấy danh sách loại sản phẩm
// Result: danh sách loại sản phẩm
export const getCategoryDatabase = async () => {

    const _category = await Categories.findAll({
        where: {
            isDeleted: 0
        }
    });

    return _category;
}

// Get branchs (thẻ bên phải mỗi product page)
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

// Get tags (thẻ bên phải mỗi product page)
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

// Lấy danh sách bình luận dựa vào productId
// Input : limit, page, productId
// Result: count + list bình luận
export const getCommentListDatabaseByProductId = async (limit, page, productId) => {

    const _comment = await Comments.findAndCountAll({
        where: {
            isDeleted: 0,
            productId: productId
        },
        limit: limit,
        offset: limit * (page - 1),
        order: [
            ['updatedAt', 'ASC']
        ]
    });

    return _comment;
}

// Thêm bình luận
// Input : productId, name,email,content
// Result: 
export const addACommentDatabase = async (productId, name, email, content) => {
    await Comments.create({
        productId: productId,
        name: name,
        address: email,
        content: content
    });
}

// Lấy danh sách sản phẩm tìm kiếm nâng cao
// Input : limit, page, search text, color,size, category
// Result: count + list sản phẩm
export const getProductListDatabaseByAdvanceSearch = async (text, color, size, category) => {

    const _product = await Products.findAndCountAll({
        where: {
            isDeleted: 0,
            name: {
                [Op.like]: `%${text}%`
            },
            color: color,
            size: size,
            type: category
        }
    });
    return _product;
}