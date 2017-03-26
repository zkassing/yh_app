var table = "content";
var data = {    
  queryBySubject: `select * from ${table} where subject=?`,    
  queryAll: `select * from ${table}`
};
module.exports = data;