import { Products } from "../database/models";

export const getCategoryLeftBar = () => {
    return [
        {
            id: 1,
            name: "Trang chủ",
            iclass: "fa fa-home",
            ihref: "/"
        },
        {
            id: 2,
            name: "Giảm giá",
            iclass: "fa fa-shopping-bag",
            ihref: "/product"
        },
        {
            id: 3,
            name: "Hàng mới",
            iclass: "fa fa-plus-square",
            ihref: "/product"
        },
        {
            id: 4,
            name: "Thời gian & đẹp",
            iclass: "fa fa-female",
            ihref: "/product/search?text=Thời%20trang"
        },
        {
            id: 5,
            name: "Trẻ em",
            iclass: "fa fa-child",
            ihref: "/product/search?text=Trẻ%20em"
        },
        {
            id: 6,
            name: "Đồ cho Nam & Nữ",
            iclass: "fa fa-tshirt",
            ihref: "/product/search?text=Nam%20Nữ"
        },
        {
            id: 7,
            name: "Phụ kiện",
            iclass: "fa fa-mobile-alt",
            ihref: "/product"
        },
        {
            id: 8,
            name: "Hàng dịch vụ",
            iclass: "fa fa-microchip",
            ihref: "/product"
        }
    ]
}

// Lấy các sản phẩm thêm gần đây => căn cứ theo ngày
export const getRecentProduct = async () => {
    const _recent = await Products.findAll({
        limit: 6,
        offset: 0,
        order: [
            ['updatedAt', 'DESC'],
        ]
    });

    return _recent;
}

export const getBuyingMost = async () => {
    const _mostBuying = await Products.findAll({
        limit: 6,
        offset: 0,
        order: [
            ['viewCount', 'DESC'],
        ]
    });

    return _mostBuying;
}

export const getReviewOfCustomer = () => {
    return [
        {
            id: 1,
            customerName: "Bé Na",
            job: "Mất tích part 2",
            star: 5,
            image: "https://sohanews.sohacdn.com/thumb_w/660/2019/8/10/na2-156542256345810815781-15654355967011305174771.jpg",
            comment: "Bé Na đã mua hàng rồi nè, hàng khá chất lượng, đổi trả không mất phí. Thích quá hí hí. không có gì thì Bé Na sẽ ghé shop nhiều hơn nè...Moah.."
        },
        {
            id: 2,
            customerName: "Bill Gates",
            job: "Microsoft.Inc",
            star: 5,
            image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bill_Gates_June_2015.png",
            comment: "Mặc dù bác không biết nói Tiếng Việt nhưng sản phẩm này OK đó. Bác dùng Google Dịch nhé!"
        },
        {
            id: 3,
            customerName: "Mèo Bo",
            job: "cat.Inc",
            star: 5,
            image: "data:image/jpeg;base64,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",
            comment: "Mèo méo meo mèo meo.... thích quá nè, mua cho bé mấy bộ váy nữa"
        }
    ]
}