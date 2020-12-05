module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Comments', {
            id: { // id bình luận
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
                autoIncrement: 1
            },
            name: {// Tên người bình luận (tên khách/lấy từ db nếu đã đăng nhập)
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "Khách"
            },
            star: { // số sao
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 5
            },
            address: { // địa chỉ (của khách hoặc lấy từ db nếu đã đăng nhập)
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "Home.Inc"
            },
            content: { // Nội dung
                type: Sequelize.STRING,
                allowNull: true
            },
            image: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "/img/product-default.jpg"
            },
            productId: { // comment thuộc sản phẩm nào
                type: Sequelize.STRING,
                allowNull: false
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
    down: queryInterface => queryInterface.dropTable('Comments')
};