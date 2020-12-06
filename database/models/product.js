module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define(
        "Products",
        {
            id: { // UUID
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING
            },
            name: { // Tên sản phẩm
                type: DataTypes.STRING,
                allowNull: true
            },
            originPrice: { // giá gốc
                type: DataTypes.BIGINT,
                allowNull: true
            },
            salePrice: { // giá đã giảm giá
                type: DataTypes.BIGINT,
                allowNull: true
            },
            salePercent: { // phần trăm giảm giá, từ 1-100
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            quantity: { // số lượng
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            description: { // mô tả
                type: DataTypes.STRING,
                allowNull: true
            },
            type: { // Loại sản phẩm
                type: DataTypes.STRING,
                allowNull: false
            },
            branch: { // nhãn hiệu
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "Chưa cập nhật"
            },
            image1: { // hình ảnh
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "/img/product-default.jpg"
            },
            image2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "/img/product-default.jpg"
            },
            image3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "/img/product-default.jpg"
            },
            size: { // size
                type: DataTypes.STRING,
                allowNull: true
            },
            color: { // màu sắc
                type: DataTypes.STRING,
                allowNull: true
            },
            specification1: { // các thông số kĩ thuật
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "Chưa cập nhật"
            },
            specification2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "Chưa cập nhật"
            },
            specification3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "Chưa cập nhật"
            },
            viewCount: { // số lần xem sản phẩm (mỗi khi get product/:id thì +1 vào số lần xem)
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            isDeleted: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0 // chưa xóa
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: true
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {}
    );
    Products.associate = () => {
        // associations can be defined here

    };
    return Products;
};