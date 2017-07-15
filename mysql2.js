//封装：

var mysql=require('mysql');    // 引入mysql  
var pool=mysql.createPool({   //链接池
	  host:'localhost',        //主机名称
	  user:'root',            //用户
	  password:'admin' ,     //登录密码
	  database:'test'       //数据库 ：select database();

});
// 获取参数 执行的时候 会有 参数的区分
exports.query=function () {    // 暴露 ---》                公共部分代码
    var args=arguments;   //connection.query( 三个参数)
    var sqlStr=args[0];    //第一个参数 
    var params=[];
    var callback;        // 创建了一个 容器

    if(args.length===2 && typeof args[1]==='function'){
    // 两位参数的时候
          callback=args[1];  // 给我的容器 装填东西
    }else if(args.length===3 && Array.isArray(args[1]) &&typeof args[2]==='function' ){
    // 调用者 传入的 是三个 参数
        params=args[1];
        callback=args[2];  //  把参数 传入容器里面 ---》 管理
    }else {
        throw new Error('参数传入有问题')
    }
    pool.getConnection(function (err,connection) {   // 获取链接 公共
        if(err){
           callback(err);
        }
        // 执行 sql语句   connection.query   //提取
        connection.query(sqlStr,params,function (err,data) {
       // 不是公共 sqlStr,params ---》 sqlStr 内容  params--》  调用者
            if(err){
                callback(err);
            }
            connection.release();  //公共 将连接释放
            callback.apply(null,arguments)  //我将这里能够获得的所有参数 都传递给 callback()
            console.log(data)    //输出--结果
          //    apply --->       功能 ---》 arguments  ---》callback（）
         //    arguments ---> 传入的参数
        //    传入的参数 ---》callback
        
        })
    })
}




