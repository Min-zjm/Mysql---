var a=require('./mysql3')
console.log(a)     //打印出来的是function（）{}      1.
//a.updateUser({id:1,name:'min'})     //修改的内容
a.saveUser({id:7,name:'bill',sex:'M',birth:'1993-11-12'}) //添加