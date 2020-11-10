import express from "express";
import { getAccountPage, getLoginPage, getRegisterPage, postLoginPage, postRegisterPage } from "../../controllers/accountController";
const accountRouter = express.Router();

accountRouter.get("/", getAccountPage);
accountRouter.get("/login", getLoginPage);
accountRouter.post("/login", postLoginPage);
accountRouter.get("/register", getRegisterPage);
accountRouter.post("/register", postRegisterPage);


export default accountRouter;