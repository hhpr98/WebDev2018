import { v4 as uuid } from "uuid";
import { Products } from "../database/models";

export const genProduct = async () => {

    var origin = 150000;
    for (var i = 1; i < 10; i++) {
        await Products.create({
            id: uuid(),
            name: "Sản phẩm " + i.toString(),
            originPrice: origin,
            salePrice: origin - 10000,
            quantity: 100,
            description: "Cam kết chính hãng, bền, rẻ, đẹp",
            type: Math.floor(Math.random() * 4) + 1,
            image1: "/img/product-" + i.toString() + ".jpg",
            image2: "/img/product-" + (Math.floor(Math.random() * 6) + 1).toString() + ".jpg",
            image3: "/img/product-" + (Math.floor(Math.random() * 6) + 1).toString() + ".jpg",
            size: "M",
            color: "Đen",
            specification1: "Chất liệu coton",
            specification2: "Mát vào mùa hè, ấm vào mùa đông",
            specification3: "Giá cả phải chăng"
        });
        origin = origin + 20000;
    }
}