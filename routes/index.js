import express from "express";
import { getHomePage } from "../controllers/homeControllers";
const indexRouter = express.Router();

indexRouter.get('/', getHomePage);

export default indexRouter;