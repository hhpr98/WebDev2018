import express from "express";
import { getAccountPage, getLoginPage, getRegisterPage,postLoginPage } from "../../controllers/accountController";
const accountRouter = express.Router();

accountRouter.get("/", getAccountPage);
accountRouter.get("/login", getLoginPage);
accountRouter.post("/login", postLoginPage);
accountRouter.get("/register", getRegisterPage);


export default accountRouter;