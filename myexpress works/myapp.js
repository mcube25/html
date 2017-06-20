
//visit local host:3000
var express=require('express');
var app=express();
var path=require('path');
app.use(express.static(path.join(__dirname,'public')));
app.set('port,3000');
app.listen(3000,function(){
    console.log('myapp listening on port 3000');
});
//start pug
var express=require('express');
var app=express();
app.set('view engine','pug');
app.use('/static',express.static('public'));
app.get('/',function(req,res){
    res.render('index',{title:'mycode',message:'this is my message'});
});
app.listen(3000,function(){
    conesole.log('listening on port 3000');
});
//express form
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({
    extended:false
}))
app.post('/form',function(req,res){
    res.send(req.body.str.split('').reverse().join(''));
})
app.listen(3000,function(){
    console.log('listening on port 3000')
});
//stylish css
var express=require('express');
var app=express();
app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));
app.get(process.argv[3],function(req,res){
    res.render('main');
})
app.listen(process.argv[2]);
