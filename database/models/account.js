module.exports = (sequelize, DataTypes) => {
    const Accounts = sequelize.define(
        "Accounts",
        {
            id: { // UUID
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING
            },
            name: { // Tên người dùng
                type: DataTypes.STRING,
                allowNull: true
            },
            phonenumber: { // Số điện thoại
                type: DataTypes.STRING,
                allowNull: true
            },
            email: {// địa chỉ email
                type: DataTypes.STRING,
                allowNull: true
            },
            address: {// địa chỉ
                type: DataTypes.STRING,
                allowNull: true
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "/img/avatar-default.jpg"
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
    Accounts.associate = () => {
        // associations can be defined here

    };
    return Accounts;
};