
//visit local host:3000
var express=require('express');
var app=express();
var path=require('path');
app.use(express.static(path.join(__dirname,'public')));
app.set('port,3000');
app.listen(3000,function(){
    console.log('myapp listening on port 3000');
});