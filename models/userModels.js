import {Users} from "../database/models";

/////////////////////////////////////// user model
// 2 phaanf nay thao tac ben bang model
// update password
export const updateUserPW= async (newpw, userID)=>{  
    await Users.update({
       password : newpw
   },{
       where:{
           id: userID
       }
   });
}
//
export const getUserByID = async (userId) => {

    // hoặc cách này : isDeleted = 0 là tài khoản chưa xóa thôi, hiện tại chưa xóa thì nó vẫn = 0 hết
    const _users = await Users.findOne({
        where: {
            isDeleted: 0,
            id: userId
        }
    });
    return _users;
}
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