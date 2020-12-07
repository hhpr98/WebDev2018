import { v4 as uuid } from "uuid";
import { Accounts, Users } from "../database/models";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const genAccount = async () => {

    // gen one admin
    const _admin = await Accounts.create({
        id: uuid(),
        name: "admin"
    });

    const _passwordAdmin = bcrypt.hashSync("123456", SALT_ROUNDS);

    await Users.create({
        id: uuid(),
        email: _admin.email,
        username: "admin",
        password: _passwordAdmin,
        accountId: _admin.id,
        type: 0
    });


    // gen one user
    const _user = await Accounts.create({
        id: uuid(),
        name: "Nguyễn Hữu Hòa",
        phonenumber: "0982327118",
        email: "nguyenhuuhoa1998@gmail.com"
    });

    const _password = bcrypt.hashSync("123456", SALT_ROUNDS);

    await Users.create({
        id: uuid(),
        email: _user.email,
        username: "hhpr98",
        password: _password,
        accountId: _user.id,
        type: 1
    });
}