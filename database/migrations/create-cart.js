module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Carts', {
            id: { // id giỏ hàng
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
                autoIncrement: 1
            },
            totalAmount: {// tổng tiền
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
    down: queryInterface => queryInterface.dropTable('Carts')
};