import express from "express";
import homeRouter from "./admin/homeRouter";
const adminRouter = express.Router();

adminRouter.use("/", homeRouter);

export default adminRouter;