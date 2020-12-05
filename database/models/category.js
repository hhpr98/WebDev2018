module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define(
        "Products",
        {
            id: { // id loại sản phẩm
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
                autoIncrement: 1
            },
            name: { // Tên loại sản phẩm
                type: DataTypes.STRING,
                allowNull: true
            },
            location: {// Xuất xứ
                type: DataTypes.STRING,
                alowNull: true
            },
            image: {// hình ảnh loại sản phẩm
                type: DataTypes.STRING,
                alowNull: true,
                defaultValue: "/img/product-default.jpg"
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