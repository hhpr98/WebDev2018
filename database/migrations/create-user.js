module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Users', {
            id: { // UUID
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            name: { // Tên người dùng
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "User"
            },
            phonenumber: { // Số điện thoại
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "0"
            },
            email: {// địa chỉ email
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "none@hddshop.com"
            },
            address: {// địa chỉ
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "Hồ Chí Minh"
            },
            image: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "/img/avatar-default.jpg"
            },
            username: { // tên đăng nhập
                type: Sequelize.STRING,
                allowNull: true
            },
            password: { // hash
                type: Sequelize.STRING,
                allowNull: true
            },
            type: {// loại user : 0 => admin, 1: bình thường, 2: guest
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 1
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