// load .env
require('dotenv').config();

var url = require('url');
var express = require('express'); 
var app = express(); 
var router = express.Router();
var fs = require('fs');

/*
* router variables
* router 로 시작, const과 js 이름 동일 
*/ 
const routerMongodb = require('./router/routerMongodb'); 

app.get('/img/:id', function(request, response){
    var target = request.url;
    fs.createReadStream('.'+target).pipe(response); 
});

app.get('/mongoDB', routerMongodb); 

app.all('*', function (request, response){

    response.writeHead(200,{"Content-Type":"text/html"}); 
    fs.createReadStream("./index.html").pipe(response);

});

app.listen(8080, function() {
    console.log("Application Running at port 8080");
})

