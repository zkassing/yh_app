var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/yh_app';    

// var insertData = function(db, callback) {  
//     //连接到表  
//     var collection = db.collection('content');
//     //插入数据
//     var data = [{"title":"图标","img":"/static/img/item1.jpg","content":"电子商务经过了几年的发展已经逐渐成熟，并且已经发展出了自己的模式和风格。但是对于电商的设计风格大多数人还停留在最初的用商品堆砌+文字信息+各种乱七八糟的效果。而这两年各个电商公司已经非常重视设计了，而且设计风格也逐步走向简洁乃至极简的风格。这种变化是随着电商的不断发展更加重视产品的品质而进化的","subject":"UI","menu":"原创","time":"2017-02-25","collect":"1","trans":"1","score":"1"}];
//     collection.insert(data, function(err, result) { 
//         if(err)
//         {
//             console.log('Error:'+ err);
//             return;
//         }     
//         callback(result);
//     });
// }

// MongoClient.connect(DB_CONN_STR, function(err, db) {
//     console.log("连接成功！");
//     insertData(db, function(result) {
//         console.log(result);
//         db.close();
//     });
// });
function query(data,find,callback){
    MongoClient.connect(DB_CONN_STR,function(err,db){
        var collection = db.collection('content')
        collection.find(data,find).toArray(function(err,result){
            callback(err,result)
            db.close()
        })
    })
}

exports.query = query;