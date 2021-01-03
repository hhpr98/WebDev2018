import { v4 as uuid } from "uuid";
import { Users } from "../database/models";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const genAccount = async () => {

    // gen one admin

    const _passwordAdmin = bcrypt.hashSync("123456", SALT_ROUNDS);

    await Users.create({
        id: uuid(),
        username: "admin",
        password: _passwordAdmin,
        type: 0
    });

    // gen one user
    const _password = bcrypt.hashSync("123456", SALT_ROUNDS);

    await Users.create({
        id: uuid(),
        name: "Nguyễn Hữu Hòa",
        email: "nguyenhuuhoa1998@gmail.com",
        phonenumber: "0982327118",
        username: "hhpr98",
        password: _password,
        type: 1
    });
}