var mysql=require('mysql');    //引入
var pool=mysql.createPool({   //创建 链接池
	  host:'localhost',        //主机名称
	  user:'root',            //用户
	  password:'admin' ,     //登录密码
	  database:'test'       //'那个'数据库  -->select database();
})
pool.getConnection(function(err,connection){   //参数-获取 到的链接
//	 connection.query('insert into t6 (id,name,sex,birth) value(?,?,?,?)',[0,'链接','男','1993-11-12'],function(err,data){
//	 	     if(err){throw err} 
//	 	     else{
//	 	     	 console.log(data)
//	 	     }
//	 })
	  connection.query('insert into t6 value(0,'new','男','1993-11-12')',function(err,data){
	 	     
	  })
//  connection.query('delete from t6 where id=?',[5],function(){})
	  connection.release()
})
         //释放 链接 1.--node mysql.js 
        //       2.--select * from t6;(mysql中)
       //-->:查询在t6插入的：connection.query(1.2.)
