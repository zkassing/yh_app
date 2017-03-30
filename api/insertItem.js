var express = require('express');
var router = express.Router();

// var db = require('../db/mongodb');
import db from '../db/mongodb'

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(db)
    let type = req.query.type
    db.insert({type:type},{"content":0},function(err,rows){
        if(err){
            res.send({"reason":"请求错误","result":null})
        }else{
            res.send({"reason":"请求成功","result":rows})
        }
    })
});

