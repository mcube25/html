var fs=require('fs');
var path=require('path');
var ext=process.argv[2];
var ext1=process.argv[3];
var content=fs.readdir(ext,function(err,files){
    if (err){
        throw err
    }
    file.forEach(function(filename){
        var ext=path.extname(filename);
        if(ext===ext1){
            console.log(filename);
        }
    });
});
var http=require('http');
var url=process.argv[2];
var prefix=url.substring(0,8);
if (prefix==='http://'){
    http.get(url,function(response){
    response.on('data',function(data){
        console.log(data.toString());
    })
    })
}
var http=require('http');
var result=[];
var req=http.get(process.argv[2],function(response){
    response.setEncoding('utf8');
    response.on('data',function(input){
        result.push(input);
    });
    response.on('error',console.error);
    response.on('end',function(){
        console.log(result.join("").length);
    })
})