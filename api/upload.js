var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './static/upload')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+".jpg")
  }
})
 
var upload = multer({ storage: storage })
// var upload = multer({ dest: 'static/upload' })  

/* GET home page. */
router.post('/', upload.single("file"), function(req, res, next) {
    // console.log(req.file);
    res.send({name:req.file.filename,url:req.file.path})
    // let type = req.query.type
    // db.insert({type:type},function(err,rows){
    //     if(err){
    //         res.send({"reason":"请求错误","result":null})
    //     }else{
    //         res.send({"reason":"请求成功","result":rows})
    //     }
    // })
});

module.exports = router;
