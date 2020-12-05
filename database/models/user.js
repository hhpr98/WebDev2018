module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define(
        "Users",
        {
            id: { // UUID
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING
            },
            email: { // email
                type: DataTypes.STRING,
                allowNull: true
            },
            username: { // tên đăng nhập
                type: DataTypes.STRING,
                allowNull: true
            },
            password: { // hash
                type: DataTypes.STRING,
                allowNull: true
            },
            accountId: {// id tài khoản người dùng (để lấy họ tên, sđt, địa chỉ,...)
                type: DataTypes.STRING,
                allowNull: false
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