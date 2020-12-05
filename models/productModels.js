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

/*
export const getProductList = () => {
    return [
        {
            id: 1,
            name: "Đầm dạ hội đen VT01",
            star: 5,
            price: 132000,
            originPrice: 300000,
            image: "/img/product-1.jpg",
            image2: "/img/product-9.jpg",
            image3: "/img/product-10.jpg",
            image4: "/img/product-3.jpg",
            image5: "/img/product-5.jpg",
            image6: "/img/product-7.jpg",
            size: [
                {
                    sizeId: 1,
                    sizeName: "S"
                },
                {
                    sizeId: 2,
                    sizeName: "M"
                },
                {
                    sizeId: 3,
                    sizeName: "L"
                },
                {
                    sizeId: 4,
                    sizeName: "XL"
                }
            ],
            color: [
                {
                    colorId: 1,
                    colorName: "Trắng"
                },
                {
                    colorId: 2,
                    colorName: "Đen"
                }
            ],
            description: "Xu hướng thời trang bị ảnh hưởng bởi một số yếu tố, bao gồm điện ảnh, người nổi tiếng, khí hậu, khám phá sáng tạo, đổi mới, thiết kế, chính trị, kinh tế, xã hội và công nghệ. Việc kiểm tra các yếu tố này được gọi là phân tích PEST. Các nhà dự báo thời trang có thể sử dụng thông tin này để giúp xác định sự tăng trưởng hoặc suy giảm của một xu hướng cụ thể. Đồng thời giúp biết thêm về đấu trường thời trang và lối sống trong thế giới hiện đại",
            special: [
                {
                    specId: 1,
                    specName: "Dành cho người 1m50"
                },
                {
                    specId: 2,
                    specName: "3 màu"
                },
                {
                    specId: 3,
                    specName: "Chất liệu: cotton"
                },
                {
                    specId: 4,
                    specName: "Hút ẩm, thoáng mát"
                },
                {
                    specId: 5,
                    specName: "Không giặt bằng xà phòng"
                }
            ],
            review: [
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
        },
        {
            id: 2,
            name: "Áo cổ trái tymmmm VT02",
            star: 5,
            price: 121000,
            originPrice: 320000,
            image: "/img/product-2.jpg",
            image2: "/img/product-9.jpg",
            image3: "/img/product-10.jpg",
            image4: "/img/product-3.jpg",
            image5: "/img/product-5.jpg",
            image6: "/img/product-7.jpg",
            size: [
                {
                    sizeId: 1,
                    sizeName: "S"
                },
                {
                    sizeId: 2,
                    sizeName: "M"
                },
                {
                    sizeId: 3,
                    sizeName: "L"
                },
                {
                    sizeId: 4,
                    sizeName: "XL"
                }
            ],
            color: [
                {
                    colorId: 1,
                    colorName: "Trắng"
                },
                {
                    colorId: 2,
                    colorName: "Đen"
                },
                {
                    colorId: 3,
                    colorName: "Xanh"
                }
            ],
            description: "Xu hướng thời trang bị ảnh hưởng bởi một số yếu tố, bao gồm điện ảnh, người nổi tiếng, khí hậu, khám phá sáng tạo, đổi mới, thiết kế, chính trị, kinh tế, xã hội và công nghệ. Việc kiểm tra các yếu tố này được gọi là phân tích PEST. Các nhà dự báo thời trang có thể sử dụng thông tin này để giúp xác định sự tăng trưởng hoặc suy giảm của một xu hướng cụ thể. Đồng thời giúp biết thêm về đấu trường thời trang và lối sống trong thế giới hiện đại",
            special: [
                {
                    specId: 1,
                    specName: "Dành cho người 1m50"
                },
                {
                    specId: 2,
                    specName: "3 màu"
                },
                {
                    specId: 3,
                    specName: "Chất liệu: cotton"
                },
                {
                    specId: 4,
                    specName: "Hút ẩm, thoáng mát"
                },
                {
                    specId: 5,
                    specName: "Không giặt bằng xà phòng"
                }
            ],
            review: [
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
        },
        {
            id: 3,
            name: "Đầm xẻ trái VT03",
            star: 5,
            price: 200000,
            originPrice: 265000,
            image: "/img/product-3.jpg",
            image2: "/img/product-9.jpg",
            image3: "/img/product-10.jpg",
            image4: "/img/product-3.jpg",
            image5: "/img/product-5.jpg",
            image6: "/img/product-7.jpg",
            size: [
                {
                    sizeId: 1,
                    sizeName: "S"
                },
                {
                    sizeId: 2,
                    sizeName: "M"
                },
                {
                    sizeId: 3,
                    sizeName: "L"
                },
                {
                    sizeId: 4,
                    sizeName: "XL"
                }
            ],
            color: [
                {
                    colorId: 1,
                    colorName: "Trắng"
                },
                {
                    colorId: 2,
                    colorName: "Đen"
                },
                {
                    colorId: 3,
                    colorName: "Xanh"
                }
            ],
            description: "Xu hướng thời trang bị ảnh hưởng bởi một số yếu tố, bao gồm điện ảnh, người nổi tiếng, khí hậu, khám phá sáng tạo, đổi mới, thiết kế, chính trị, kinh tế, xã hội và công nghệ. Việc kiểm tra các yếu tố này được gọi là phân tích PEST. Các nhà dự báo thời trang có thể sử dụng thông tin này để giúp xác định sự tăng trưởng hoặc suy giảm của một xu hướng cụ thể. Đồng thời giúp biết thêm về đấu trường thời trang và lối sống trong thế giới hiện đại",
            special: [
                {
                    specId: 1,
                    specName: "Dành cho người 1m50"
                },
                {
                    specId: 2,
                    specName: "3 màu"
                },
                {
                    specId: 3,
                    specName: "Chất liệu: cotton"
                },
                {
                    specId: 4,
                    specName: "Hút ẩm, thoáng mát"
                },
                {
                    specId: 5,
                    specName: "Không giặt bằng xà phòng"
                }
            ],
            review: [
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
        },
        {
            id: 4,
            name: "Áo dài tay tím VT04",
            star: 5,
            price: 100000,
            originPrice: 410000,
            image: "/img/product-4.jpg",
            image2: "/img/product-9.jpg",
            image3: "/img/product-10.jpg",
            image4: "/img/product-3.jpg",
            image5: "/img/product-5.jpg",
            image6: "/img/product-7.jpg",
            size: [
                {
                    sizeId: 1,
                    sizeName: "S"
                },
                {
                    sizeId: 2,
                    sizeName: "M"
                },
                {
                    sizeId: 3,
                    sizeName: "L"
                },
                {
                    sizeId: 4,
                    sizeName: "XL"
                }
            ],
            color: [
                {
                    colorId: 1,
                    colorName: "Trắng"
                },
                {
                    colorId: 2,
                    colorName: "Đen"
                },
                {
                    colorId: 3,
                    colorName: "Xanh"
                }
            ],
            description: "Xu hướng thời trang bị ảnh hưởng bởi một số yếu tố, bao gồm điện ảnh, người nổi tiếng, khí hậu, khám phá sáng tạo, đổi mới, thiết kế, chính trị, kinh tế, xã hội và công nghệ. Việc kiểm tra các yếu tố này được gọi là phân tích PEST. Các nhà dự báo thời trang có thể sử dụng thông tin này để giúp xác định sự tăng trưởng hoặc suy giảm của một xu hướng cụ thể. Đồng thời giúp biết thêm về đấu trường thời trang và lối sống trong thế giới hiện đại",
            special: [
                {
                    specId: 1,
                    specName: "Dành cho người 1m50"
                },
                {
                    specId: 2,
                    specName: "3 màu"
                },
                {
                    specId: 3,
                    specName: "Chất liệu: cotton"
                },
                {
                    specId: 4,
                    specName: "Hút ẩm, thoáng mát"
                },
                {
                    specId: 5,
                    specName: "Không giặt bằng xà phòng"
                }
            ],
            review: [
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
        },
        {
            id: 5,
            name: "Quần jean nam VT05",
            star: 5,
            price: 200000,
            originPrice: 300000,
            image: "/img/product-5.jpg",
            image2: "/img/product-9.jpg",
            image3: "/img/product-10.jpg",
            image4: "/img/product-3.jpg",
            image5: "/img/product-5.jpg",
            image6: "/img/product-7.jpg",
            size: [
                {
                    sizeId: 1,
                    sizeName: "S"
                },
                {
                    sizeId: 2,
                    sizeName: "M"
                },
                {
                    sizeId: 3,
                    sizeName: "L"
                },
                {
                    sizeId: 4,
                    sizeName: "XL"
                }
            ],
            color: [
                {
                    colorId: 1,
                    colorName: "Trắng"
                },
                {
                    colorId: 2,
                    colorName: "Đen"
                },
                {
                    colorId: 3,
                    colorName: "Xanh"
                }
            ],
            description: "Xu hướng thời trang bị ảnh hưởng bởi một số yếu tố, bao gồm điện ảnh, người nổi tiếng, khí hậu, khám phá sáng tạo, đổi mới, thiết kế, chính trị, kinh tế, xã hội và công nghệ. Việc kiểm tra các yếu tố này được gọi là phân tích PEST. Các nhà dự báo thời trang có thể sử dụng thông tin này để giúp xác định sự tăng trưởng hoặc suy giảm của một xu hướng cụ thể. Đồng thời giúp biết thêm về đấu trường thời trang và lối sống trong thế giới hiện đại",
            special: [
                {
                    specId: 1,
                    specName: "Dành cho người 1m50"
                },
                {
                    specId: 2,
                    specName: "3 màu"
                },
                {
                    specId: 3,
                    specName: "Chất liệu: cotton"
                },
                {
                    specId: 4,
                    specName: "Hút ẩm, thoáng mát"
                },
                {
                    specId: 5,
                    specName: "Không giặt bằng xà phòng"
                }
            ],
            review: [
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
        },
        {
            id: 6,
            name: "Quần bò VT06",
            star: 5,
            price: 150000,
            originPrice: 200000,
            image: "/img/product-6.jpg",
            image2: "/img/product-9.jpg",
            image3: "/img/product-10.jpg",
            image4: "/img/product-3.jpg",
            image5: "/img/product-5.jpg",
            image6: "/img/product-7.jpg",
            size: [
                {
                    sizeId: 1,
                    sizeName: "S"
                },
                {
                    sizeId: 2,
                    sizeName: "M"
                },
                {
                    sizeId: 3,
                    sizeName: "L"
                },
                {
                    sizeId: 4,
                    sizeName: "XL"
                }
            ],
            color: [
                {
                    colorId: 1,
                    colorName: "Trắng"
                },
                {
                    colorId: 2,
                    colorName: "Đen"
                },
                {
                    colorId: 3,
                    colorName: "Xanh"
                }
            ],
            description: "Xu hướng thời trang bị ảnh hưởng bởi một số yếu tố, bao gồm điện ảnh, người nổi tiếng, khí hậu, khám phá sáng tạo, đổi mới, thiết kế, chính trị, kinh tế, xã hội và công nghệ. Việc kiểm tra các yếu tố này được gọi là phân tích PEST. Các nhà dự báo thời trang có thể sử dụng thông tin này để giúp xác định sự tăng trưởng hoặc suy giảm của một xu hướng cụ thể. Đồng thời giúp biết thêm về đấu trường thời trang và lối sống trong thế giới hiện đại",
            special: [
                {
                    specId: 1,
                    specName: "Dành cho người 1m50"
                },
                {
                    specId: 2,
                    specName: "3 màu"
                },
                {
                    specId: 3,
                    specName: "Chất liệu: cotton"
                },
                {
                    specId: 4,
                    specName: "Hút ẩm, thoáng mát"
                },
                {
                    specId: 5,
                    specName: "Không giặt bằng xà phòng"
                }
            ],
            review: [
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
        },
        {
            id: 7,
            name: "Đầm ngang lưng VT07",
            star: 5,
            price: 400000,
            originPrice: 420000,
            image: "/img/product-7.jpg",
            image2: "/img/product-9.jpg",
            image3: "/img/product-10.jpg",
            image4: "/img/product-3.jpg",
            image5: "/img/product-5.jpg",
            image6: "/img/product-7.jpg",
            size: [
                {
                    sizeId: 1,
                    sizeName: "S"
                },
                {
                    sizeId: 2,
                    sizeName: "M"
                },
                {
                    sizeId: 3,
                    sizeName: "L"
                },
                {
                    sizeId: 4,
                    sizeName: "XL"
                }
            ],
            color: [
                {
                    colorId: 1,
                    colorName: "Trắng"
                },
                {
                    colorId: 2,
                    colorName: "Đen"
                },
                {
                    colorId: 3,
                    colorName: "Xanh"
                }
            ],
            description: "Xu hướng thời trang bị ảnh hưởng bởi một số yếu tố, bao gồm điện ảnh, người nổi tiếng, khí hậu, khám phá sáng tạo, đổi mới, thiết kế, chính trị, kinh tế, xã hội và công nghệ. Việc kiểm tra các yếu tố này được gọi là phân tích PEST. Các nhà dự báo thời trang có thể sử dụng thông tin này để giúp xác định sự tăng trưởng hoặc suy giảm của một xu hướng cụ thể. Đồng thời giúp biết thêm về đấu trường thời trang và lối sống trong thế giới hiện đại",
            special: [
                {
                    specId: 1,
                    specName: "Dành cho người 1m50"
                },
                {
                    specId: 2,
                    specName: "3 màu"
                },
                {
                    specId: 3,
                    specName: "Chất liệu: cotton"
                },
                {
                    specId: 4,
                    specName: "Hút ẩm, thoáng mát"
                },
                {
                    specId: 5,
                    specName: "Không giặt bằng xà phòng"
                }
            ],
            review: [
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
        },
        {
            id: 8,
            name: "Áo VT08",
            star: 5,
            price: 250000,
            originPrice: 300000,
            image: "/img/product-8.jpg",
            image2: "/img/product-9.jpg",
            image3: "/img/product-10.jpg",
            image4: "/img/product-3.jpg",
            image5: "/img/product-5.jpg",
            image6: "/img/product-7.jpg",
            size: [
                {
                    sizeId: 1,
                    sizeName: "S"
                },
                {
                    sizeId: 2,
                    sizeName: "M"
                },
                {
                    sizeId: 3,
                    sizeName: "L"
                },
                {
                    sizeId: 4,
                    sizeName: "XL"
                }
            ],
            color: [
                {
                    colorId: 1,
                    colorName: "Trắng"
                },
                {
                    colorId: 2,
                    colorName: "Đen"
                },
                {
                    colorId: 3,
                    colorName: "Xanh"
                }
            ],
            description: "Xu hướng thời trang bị ảnh hưởng bởi một số yếu tố, bao gồm điện ảnh, người nổi tiếng, khí hậu, khám phá sáng tạo, đổi mới, thiết kế, chính trị, kinh tế, xã hội và công nghệ. Việc kiểm tra các yếu tố này được gọi là phân tích PEST. Các nhà dự báo thời trang có thể sử dụng thông tin này để giúp xác định sự tăng trưởng hoặc suy giảm của một xu hướng cụ thể. Đồng thời giúp biết thêm về đấu trường thời trang và lối sống trong thế giới hiện đại",
            special: [
                {
                    specId: 1,
                    specName: "Dành cho người 1m50"
                },
                {
                    specId: 2,
                    specName: "3 màu"
                },
                {
                    specId: 3,
                    specName: "Chất liệu: cotton"
                },
                {
                    specId: 4,
                    specName: "Hút ẩm, thoáng mát"
                },
                {
                    specId: 5,
                    specName: "Không giặt bằng xà phòng"
                }
            ],
            review: [
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
        },
        {
            id: 9,
            name: "Áo dài tay VT09",
            star: 5,
            price: 180000,
            originPrice: 300000,
            image: "/img/product-9.jpg",
            image2: "/img/product-9.jpg",
            image3: "/img/product-10.jpg",
            image4: "/img/product-3.jpg",
            image5: "/img/product-5.jpg",
            image6: "/img/product-7.jpg",
            size: [
                {
                    sizeId: 1,
                    sizeName: "S"
                },
                {
                    sizeId: 2,
                    sizeName: "M"
                },
                {
                    sizeId: 3,
                    sizeName: "L"
                },
                {
                    sizeId: 4,
                    sizeName: "XL"
                }
            ],
            color: [
                {
                    colorId: 1,
                    colorName: "Trắng"
                },
                {
                    colorId: 2,
                    colorName: "Đen"
                },
                {
                    colorId: 3,
                    colorName: "Xanh"
                }
            ],
            description: "Xu hướng thời trang bị ảnh hưởng bởi một số yếu tố, bao gồm điện ảnh, người nổi tiếng, khí hậu, khám phá sáng tạo, đổi mới, thiết kế, chính trị, kinh tế, xã hội và công nghệ. Việc kiểm tra các yếu tố này được gọi là phân tích PEST. Các nhà dự báo thời trang có thể sử dụng thông tin này để giúp xác định sự tăng trưởng hoặc suy giảm của một xu hướng cụ thể. Đồng thời giúp biết thêm về đấu trường thời trang và lối sống trong thế giới hiện đại",
            special: [
                {
                    specId: 1,
                    specName: "Dành cho người 1m50"
                },
                {
                    specId: 2,
                    specName: "3 màu"
                },
                {
                    specId: 3,
                    specName: "Chất liệu: cotton"
                },
                {
                    specId: 4,
                    specName: "Hút ẩm, thoáng mát"
                },
                {
                    specId: 5,
                    specName: "Không giặt bằng xà phòng"
                }
            ],
            review: [
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
    ]
}
*/

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