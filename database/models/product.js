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
                allowNull: true
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
            size1: { // các loại size
                type: DataTypes.STRING,
                allowNull: true
            },
            size2: {
                type: DataTypes.STRING,
                allowNull: true
            },
            size3: {
                type: DataTypes.STRING,
                allowNull: true
            },
            size4: {
                type: DataTypes.STRING,
                allowNull: true
            },
            color1: { // các loại màu sắc
                type: DataTypes.STRING,
                allowNull: true
            },
            color2: {
                type: DataTypes.STRING,
                allowNull: true
            },
            color3: {
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