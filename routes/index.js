import express from "express";
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'ccccc' });
});

export default indexRouter;