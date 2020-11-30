module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define(
        "Products",
        {
            id: { // UUID
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING
            },
            productId: { // Mã sản phẩm, vd: PR001
                type: DataTypes.STRING,
                allowNull: true
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
                allowNull: true
            },
            quantity: { // số lượng
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 100
            },
            description: { // mô tả
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "Không có mô tả"
            },
            type: { // Loại sản phẩm
                type: DataTypes.STRING,
                allowNull: false
            },
            branch: { // nhãn hiệu
                type: DataTypes.STRING,
                allowNull: true
            },
            image1: { // hình ảnh
                type: DataTypes.STRING,
                allowNull: true
            },
            image2: {
                type: DataTypes.STRING,
                allowNull: true
            },
            image3: {
                type: DataTypes.STRING,
                allowNull: true
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
                allowNull: true
            },
            specification2: {
                type: DataTypes.STRING,
                allowNull: true
            },
            specification3: {
                type: DataTypes.STRING,
                allowNull: true
            },
            viewCount: { // số lần xem sản phẩm (mỗi khi get product/:id thì +1 vào số lần xem)
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
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