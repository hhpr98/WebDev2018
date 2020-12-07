import { Accounts} from "../database/models";

export const getUser1 = async () => {

    // hoặc cách này : isDeleted = 0 là tài khoản chưa xóa thôi, hiện tại chưa xóa thì nó vẫn = 0 hết
    const _users = await Accounts.findOne({
        where: {
            isDeleted: 0,
            name: "Nguyễn Hữu Hòa"
        }
    });
   
    return _users;
}