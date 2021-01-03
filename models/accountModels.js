import { v4 as uuid } from "uuid";
import { Users } from "../database/models";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

// update password
export const updatePasswordById = async (newpw, userID)=>{  
    const _password = bcrypt.hashSync(newpw, SALT_ROUNDS);
    
    await Users.update({
       password : _password
   },{
       where:{
           id: userID
       }
   });
}
//

export const getUserByUserName = async (userName) => {

    // hoặc cách này : isDeleted = 0 là tài khoản chưa xóa thôi, hiện tại chưa xóa thì nó vẫn = 0 hết
    const _users = await Users.findOne({
        where: {
            isDeleted: 0,
            username: userName
        }
    });
    return _users;
}
// admin
// create new
export const addAccount = async (username, password, email) => {
    // tạo thông tin trong bảng account
    const _password = bcrypt.hashSync(password, SALT_ROUNDS);
    await Users.create({
        id: uuid(),
        name: "Người dùng",
        email: email,
        phonenumber: null,
        username: username,
        password: _password,
        type: 1
    });
}

export const getAccountByID = async (userId) => {
    const _users = await Users.findOne({
        where: {
            isDeleted: 0,
            id: userId
        }
    });
    return _users;
}

export const getAccountByUserName = async (userName) => {
    const _users = await Users.findOne({
        where: {
            isDeleted: 0,
            username: userName
        }
    });
    if(_users == null)
        return null;
    const id = _users.id;
    const un = _users.username;
    const pw = _users.password;
    return {
        id, un, pw
    };
}
export const getNPIById = async (userid) => {
    const _users = await Users.findOne({
        where: {
            isDeleted: 0,
            id: userid
        }
    });
    if(_users == null)
        return null;
    const id = _users.id;
    const un = _users.username;
    const pw = _users.password;
    return {
        id, un, pw
    };
}
export const updateUserInfoById = async (username, phone, email, adress, userID)=>{
    await Users.update({
        name: username,
        email: email,
        phonenumber: phone,
        address: adress
   },{
       where:{
           id: userID
       }
   });
}

// luu hinh anh nguoi dung vao db 
export const updateUserImage = async (userID, update_img_src) => {
    await Users.update({
        image : update_img_src
   },{
       where:{
           id: userID
       }
   });
    
}
