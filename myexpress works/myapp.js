
//visit local host:3000
var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send('Hello World');
});
app.listen(300,function(){
    console.log('myapp listening on port 3000');
});