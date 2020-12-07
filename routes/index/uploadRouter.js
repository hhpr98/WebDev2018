import express from "express";
import multer from "multer"
import { getProductDetail, getProductList } from "../../controllers/productController";
import { getUser } from "../../models/accountModels";
const uploadRouter = express.Router();

// này set store để lưu hình
// ban đầu để bên app.js mà e chuyển qua đây cho dễ theo dõi

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/uploads')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

  // chỗ này để up load hình vào, upload.single('file')
  //req.file.originalname;
  // req.file.ori.... này, nãy e tách sang controller, thì k lấy đc nữa
  // mình truyền nó đi vào function(name) hay sao a
  // này là dạng middleware, bữa nào authen thầy sẽ dạy
  // "route | middleware | function" <= controller chỉ handle cái function thôi nên tách có khả năng lỗi

  uploadRouter.post('/avata', upload.single('file'),(req, res) => {
    console.log(req.file);
    var u = "/img/" + req.file.originalname;
    var user1 = getUser();
    console.log(u);
    res.render("account/account", { title: "Tài khoản", user: user1, imgurl: u });
})

export default uploadRouter;