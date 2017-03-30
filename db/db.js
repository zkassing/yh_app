  //db.js
var mysql = require('mysql')
var pool = mysql.createPool({//创建连接池
  host:"localhost",
  user:"root",
  password:"root",
  database:"yh_app",
  port:"3306"
});
function query(sql,data,callback){
  pool.getConnection(function(err,connection){//创建连接
    connection.query(sql,data,function(err,rows){
      callback(err,rows)
      connection.release()//释放连接
    })
  })
}
exports.query = query;