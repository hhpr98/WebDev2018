import express from "express";
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.render('home/index');
});

export default indexRouter;