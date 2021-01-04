import { v4 as uuid } from "uuid";
import { Users } from "../database/models";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;
// get account email by username
export const getAccoutNPEByUsername= async(userName) =>{
    const _users = await Users.findOne({
        where: {
            isDeleted: 0,
            username: userName
        }
    });
    if(_users==null)
        return null;
    const ran = Math.floor(Math.random() * 1000000);
    const _code = ran.toString().padStart(6, "0"); // đúng 6 chữ số , nếu k đủ thêm các số 0 vào đầu
    await updatePassword(_code,_users.id);
    const e = _users.email;
    const un = _users.username;
    const npw = _code;
    return {
        e, npw, un
    };
}
// verifyAccountById
export const verifyAccountById= async(userID) =>{
    await Users.update({
        isBanned : 0
    },{
        where:{
            id: userID
        },
        limit: 1
    });
}
export const getVerifyCodeById= async(userid) =>{
    const _users = await Users.findOne({
        where: {
            isDeleted: 0,
            id: userid
        }
    });
    return _users.isBanned;
}
// update password
export const updatePasswordById = async (newpw, userID)=>{  
    const _password = bcrypt.hashSync(newpw, SALT_ROUNDS);
    await updatePassword(newpw, userID);
}
const updatePassword = async (newpw, userID)=>{  
    const _password = bcrypt.hashSync(newpw, SALT_ROUNDS);
    
    await Users.update({
       password : _password
   },{
       where:{
           id: userID
       },
        limit:1
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
export const addAccount = async (username, password, email, code) => {
    // tạo thông tin trong bảng account
    const _password = bcrypt.hashSync(password, SALT_ROUNDS);
    await Users.create({
        id: uuid(),
        name: "Người dùng",
        email: email,
        phonenumber: null,
        username: username,
        password: _password,
        type: 1,
        isBanned: code
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
       },
       limit:1
   });
}

// luu hinh anh nguoi dung vao db 
export const updateUserImage = async (userID, update_img_src) => {
    await Users.update({
        image : update_img_src
   },{
       where:{
           id: userID
       },
       limit:1
   });
    
}
