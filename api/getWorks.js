var express = require('express');
var router = express.Router();

var db = require('../db/mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
    db.query({},{"content":0},function(err,rows){
        if(err){
            res.send({"reason":"请求错误","result":null})
        }else{
            res.send({"reason":"请求成功","result":rows})
        }
    })
});

module.exports = router;
