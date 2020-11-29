module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Products', {
            id: { // UUID
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            productId: { // Mã sản phẩm, vd: PR001
                type: Sequelize.STRING,
                allowNull: true
            },
            name: { // Tên sản phẩm
                type: Sequelize.STRING,
                allowNull: true
            },
            originPrice: { // giá gốc
                type: Sequelize.BIGINT,
                allowNull: true
            },
            salePrice: { // giá đã giảm giá
                type: Sequelize.BIGINT,
                allowNull: true
            },
            salePercent: { // phần trăm giảm giá, từ 1-100
                type: Sequelize.INTEGER,
                allowNull: true
            },
            quantity: { // số lượng
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 100
            },
            description: { // mô tả
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "Không có mô tả"
            },
            type: { // Loại sản phẩm
                type: Sequelize.STRING,
                allowNull: false
            },
            branch: { // nhãn hiệu
                type: Sequelize.STRING,
                allowNull: true
            },
            image1: { // hình ảnh
                type: Sequelize.STRING,
                allowNull: true
            },
            image2: {
                type: Sequelize.STRING,
                allowNull: true
            },
            image3: {
                type: Sequelize.STRING,
                allowNull: true
            },
            size: { // size
                type: Sequelize.STRING,
                allowNull: true
            },
            color: { // màu sắc
                type: Sequelize.STRING,
                allowNull: true
            },
            specification1: { // các thông số kĩ thuật
                type: Sequelize.STRING,
                allowNull: true
            },
            specification2: {
                type: Sequelize.STRING,
                allowNull: true
            },
            specification3: {
                type: Sequelize.STRING,
                allowNull: true
            },
            viewCount: { // số lần xem sản phẩm (mỗi khi get product/:id thì +1 vào số lần xem)
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0
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
    down: queryInterface => queryInterface.dropTable('Products')
};