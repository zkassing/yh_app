var express = require('express');
var router = express.Router();

var db = require('../../db/mongodb');

/* GET home page. */
router.post('/', function(req, res, next) {
    var type = req.body.type
    switch(type){
        case "add":
            db.insert(req.body.result,req.body.col,function(err,result){
                if(err) res.send({'status':"error"})
                else{
                    console.log(result)
                    res.send({"status":"success",id:result.ops[0]._id})
                }
            })
            break
        case "query":
            db.query(req.body.t||{},req.body.d||{},req.body.col,function(err,rows){
                if(err){
                    res.send({"status":"error"})
                }else{
                    res.send(rows)
                }
            })
            break
        case "del":
            db.del(req.body._id,req.body.col,function(err,result){
                if(err) res.send({'status':"error"})
                else res.send({"status":"success"})
            })
            break
        case "update":
            db.save(req.body.update,req.body.col,function(err,result){
                if(err) res.send({'status':"error"})
                else res.send({"status":"success"})
            })
    }
});

module.exports = router;
