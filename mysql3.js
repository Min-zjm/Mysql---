var connection=require('./mysql2.js')  //（可同级目录）引入公共js（封装）   ??????
function Users(users){
	
}


module.exports=Users  // 1. 暴露function(){}（在mysql4.js执行）
Users.saveUser=function(user){     //模块
	 var saveSql='insert into t6 (id,name,sex,birth) values (?,?,?,?)';
	 connection.query(saveSql,[user.id,user.name,user.sex,user.birth],function(err,result){
	 	console.log(result)
	 })
}


//添加：           2.
//Users.saveUser=function(user){
//	 var saveSql='insert into t6 (id,name,sex,birth) values (?,?,?,?)';
//	 connection.query(saveSql,[user.id,user.name,user.sex,user.birth],function(err,result){
//	 	console.log(result)
//	 })
//}
//Users.saveUser({id:6,name:'block',sex:'1',birth:'1993-11-12'})

//删除：
//Users.deleteUser=function(user){
//	 var del='delete from t6 where id=?';
//	  connection.query(del,[user.id],function(err,result){
//	  	  if(err){
//	  	  	   return console.log(err)
//	  	  }
//	  	  console.log('delete成功');
//	  })
//}
//Users.deleteUser({id:2})

//查询：
//Users.getUser=function(user){
//	  var selectSql='select * from t6 where id=?'
//	  connection.query(selectSql,[user.id],function(err,res){
//	  	  if(err){
//	  	  	console.log(err)
//	  	  }
//	  	  console.log('查询成功')
//	  })
//}
//Users.getUser({id:6})

//修改：
//Users.updateUser=function(user){
//	  var updateSql='update t6 set name=? where id=?'
//	  connection.query(updateSql,[user.name,user.id],function(err,res){  //
//	  	  if(err){
//	  	  return console.log(err)
//	  	  }
//	  	  console.log('修改成功')
//	  })
//}
//Users.updateUser({id:3,name:'job'})