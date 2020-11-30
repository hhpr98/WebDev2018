import express from "express";
import {getHomePage} from "../../controllers/adminHomeController";
const homeRouter = express.Router();

homeRouter.get("/", getHomePage);

export default homeRouter;