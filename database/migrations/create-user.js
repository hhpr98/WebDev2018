module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Users', {
            id: { // UUID
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            email: { // email
                type: Sequelize.STRING,
                allowNull: true
            },
            username: { // tên đăng nhập
                type: Sequelize.STRING,
                allowNull: true
            },
            password: { // hash
                type: Sequelize.STRING,
                allowNull: true
            },
            accountId: {// id tài khoản người dùng (để lấy họ tên, sđt, địa chỉ,...)
                type: Sequelize.STRING,
                allowNull: false
            },
            isBanned: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0 // chưa bị ban
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
    down: queryInterface => queryInterface.dropTable('Users')
};