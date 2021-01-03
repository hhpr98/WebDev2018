import { Accounts, Users} from "../database/models";
import { v4 as uuid } from "uuid";

// create new
export const addNewAccoutToDatabase = async (username, password, email) => {
    // tạo thông tin trong bảng account
    var account_id = uuid();
    var created_date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    await Accounts.create({
        id: account_id,
        name: username,
        phonenumber: null,
        email: email,
        address: null,
        image: '/img/avatar-default.jpg',
        isDeleted: 0,
        createdAt: created_date,
        updatedAt: null
    });
    // tạo tài khoản ttrong bảng user
    await   Users.create({
        id: uuid(),
        email: email,
        username: username,
        password: password,
        accountId: account_id,
        type: 1,
        isBanned:-1, // chua verificate
        isDeleted: 0,
        createdAt: created_date,
        updatedAt: null
    })
}
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
export const getAccountByID = async (userId) => {

    // hoặc cách này : isDeleted = 0 là tài khoản chưa xóa thôi, hiện tại chưa xóa thì nó vẫn = 0 hết
    const _users = await Accounts.findOne({
        where: {
            isDeleted: 0,
            id: userId
        }
    });
    return _users;
}

export const getAccountByUserName = async (userName) => {
    console.log("model ");
    // hoặc cách này : isDeleted = 0 là tài khoản chưa xóa thôi, hiện tại chưa xóa thì nó vẫn = 0 hết
    const _users = await Accounts.findOne({
        where: {
            isDeleted: 0,
            name: userName
        }
    });
    console.log("model " + _users);
    if(_users == null)
        return "";
        // trong banrgh này k có pw, nên e lấy phone ra để test
        
    return _users.phonenumber;
}
export const updateUserInfo = async (firstName, phone, email, adress, userID)=>{
    await Accounts.update({
        name : firstName,
        phonenumber: phone,
        address: adress,
        email:email
   },{
       where:{
           id: userID
       }
   });
}

// luu hinh anh nguoi dung vao db 
export const saveUser1 = async (id, update_img) => {

    // hoặc cách này : isDeleted = 0 là tài khoản chưa xóa thôi, hiện tại chưa xóa thì nó vẫn = 0 hết
    const _users = await Accounts.findOne({
        where: {
            isDeleted: 0,
            id: id
        }
    });
    _users.image = update_img;
    await _users.save();
    return _users;
}
