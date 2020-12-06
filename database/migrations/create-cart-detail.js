module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('CartDetails', {
            id: { // id chi tiết giỏ hàng
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
                autoIncrement: 1
            },
            cardId: {
                type: Sequelize.STRING,
                allowNull: false
            },
            productId: {
                type: Sequelize.STRING,
                allowNull: false
            },
            quantity: { // số lượng của từng sản phẩm (khác với số lượng sản phẩm bên cart)
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            amount: { // đơn giá 1 sản phẩm
                type: Sequelize.BIGINT,
                allowNull: true,
                defaultValue: 0
            },
            isDeleted: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0 // chưa xóa
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: true
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: true
            }
        }),
    down: queryInterface => queryInterface.dropTable('CartDetails')
};