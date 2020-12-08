import express from "express";
import multer from "multer"

import { updateAvata} from '../../controllers/accountController'
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


  uploadRouter.post('/avata', upload.single('file'),(req, res)=>{
    updateAvata(req, res, req.file.originalname);
})

export default uploadRouter;