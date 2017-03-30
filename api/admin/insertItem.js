var express = require('express');
var router = express.Router();

var db = require('../../db/mongodb');

/* GET home page. */
router.post('/', function(req, res, next) {
    db.insert(req.body.params,"content",function(err,rows){
        if(err){
            res.send({"status":"error"})
        }else{
            res.send({"status":"success"})
        }
    })
});

module.exports = router;
