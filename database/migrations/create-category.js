module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Categories', {
            id: { // id loại sản phẩm
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
                autoIncrement: 1
            },
            name: { // Tên loại sản phẩm
                type: Sequelize.STRING,
                allowNull: true
            },
            location: {// Xuất xứ
                type: Sequelize.STRING,
                alowNull: true
            },
            image: {// hình ảnh loại sản phẩm
                type: Sequelize.STRING,
                alowNull: true,
                defaultValue: "/img/product-default.jpg"
            },
            iclass: { // class icon
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "fa fa-microchip"
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
    down: queryInterface => queryInterface.dropTable('Categories')
};