import express from "express";
import multer from "multer"
import { getProductDetail, getProductList } from "../../controllers/productController";
import { getUser } from "../../models/accountModels";
const uploadRouter = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

  //
  uploadRouter.post('/avata', upload.single('file'),(req, res) => {
    console.log(req.file);
    var u = "/img/" + req.file.originalname;
    var user1 = getUser();
    console.log(u);
    res.render("account/account", { title: "Tài khoản", user: user1[0], imgurl: u });
})

export default uploadRouter;