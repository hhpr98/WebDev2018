module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define(
        "Users",
        {
            id: { // UUID
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING
            },
            name: { // Tên người dùng
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "User"
            },
            phonenumber: { // Số điện thoại
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "0"
            },
            email: {// địa chỉ email
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "none@hddshop.com"
            },
            address: {// địa chỉ
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "Hồ Chí Minh"
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "/img/avatar-default.jpg"
            },
            username: { // tên đăng nhập
                type: DataTypes.STRING,
                allowNull: true
            },
            password: { // hash
                type: DataTypes.STRING,
                allowNull: true
            },
            type: {// loại user : 0 => admin, 1: bình thường, 2: guest
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 1
            },
            isBanned: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0 // chưa bị ban
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
    Users.associate = () => {
        // associations can be defined here

    };
    return Users;
};