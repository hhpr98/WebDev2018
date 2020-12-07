import { Accounts} from "../database/models";

export const getUser1 = async () => {

    const _users = await Accounts.findAll({
        where: {
            name: "Nguyễn Hữu Hòa"
        }
    });
   console.log(_users.id)
    return _users;
}