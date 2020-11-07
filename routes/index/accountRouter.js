import express from "express";
import { getAccountPage, getLoginPage, getRegisterPage } from "../../controllers/accountController";
const accountRouter = express.Router();

accountRouter.get("/", getAccountPage);
accountRouter.get("/login", getLoginPage);
accountRouter.get("/register", getRegisterPage);

export default accountRouter;