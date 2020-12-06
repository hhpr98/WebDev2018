module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define(
        "Comments",
        {
            id: { // id bình luận
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
                autoIncrement: 1
            },
            name: {// Tên người bình luận (tên khách/lấy từ db nếu đã đăng nhập)
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "Khách"
            },
            star: { // số sao
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 5
            },
            address: { // địa chỉ (của khách hoặc lấy từ db nếu đã đăng nhập)
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "Home.Inc"
            },
            content: { // Nội dung
                type: DataTypes.STRING,
                allowNull: true
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "/img/product-default.jpg"
            },
            productId: { // comment thuộc sản phẩm nào
                type: DataTypes.STRING,
                allowNull: false
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
    Comments.associate = () => {
        // associations can be defined here

    };
    return Comments;
};