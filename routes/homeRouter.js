import express from "express";
import { getHomePage } from "../controllers/homeControllers";
const homeRouter = express.Router();

homeRouter.get("/", getHomePage);

export default homeRouter;