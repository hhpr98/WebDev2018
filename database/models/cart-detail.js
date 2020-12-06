module.exports = (sequelize, DataTypes) => {
    const CartDetails = sequelize.define(
        "CartDetails",
        {
            id: { // id chi tiết giỏ hàng
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
                autoIncrement: 1
            },
            cardId: {
                type: DataTypes.STRING,
                allowNull: false
            },
            productId: {
                type: DataTypes.STRING,
                allowNull: false
            },
            quantity: { // số lượng của từng sản phẩm (khác với số lượng sản phẩm bên cart)
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            amount: { // đơn giá 1 sản phẩm
                type: DataTypes.BIGINT,
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
    CartDetails.associate = () => {
        // associations can be defined here

    };
    return CartDetails;
};