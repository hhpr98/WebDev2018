module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Accounts', {
            id: { // UUID
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            name: { // Tên người dùng
                type: Sequelize.STRING,
                allowNull: true
            },
            phonenumber: { // Số điện thoại
                type: Sequelize.STRING,
                allowNull: true
            },
            email: {// địa chỉ email
                type: Sequelize.STRING,
                allowNull: true
            },
            address: {// địa chỉ
                type: Sequelize.STRING,
                allowNull: true
            },
            image: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "/img/avatar-default.jpg"
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
    down: queryInterface => queryInterface.dropTable('Accounts')
};