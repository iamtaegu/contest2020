// load .env
require('dotenv').config();

var url = require('url');
var express = require('express'); 
var session = require('express-session');  
var app = express(); 
var router = express.Router();
var fs = require('fs');
var path = require("path");

const {PythonShell} = require('python-shell');

/*
* router variables
* router 로 시작, const과 js 이름 동일 
*/ 
//const routerMongodb = require('./router/routerMongodb'); 
const routerPython = require('./router/routerPython'); 
//app.get('/mongoDB', routerMongodb); 
app.get('/python', routerPython); 

app.get('/img/:id', function(request, response){
    var target = request.url;
    fs.createReadStream('.'+target).pipe(response); 
});

app.get('/python', function(request, response){
    console.log("python start");

    let options = { 
        mode: 'text', 
        pythonPath: '/usr/bin/python3', 
        pythonOptions: ['-u'], 
        scriptPath: path.join(__dirname, "./python/"),
        args: ['value1', 'value2', 'value3'],
        encoding: 'utf8' 
    };
    console.log(options);
    PythonShell.run('ref.py', options, function (err, results) {
        if (err) throw err;
        console.log('results: %j', results);    
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        fs.createReadStream("./html/map.html").pipe(response);
    });


    /*8esponse.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    fs.createReadStream("./html/map.html").pipe(response);*/
    console.log("python end");
});

app.get('/map', function(request, response){
    console.log("map 2");

    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    fs.createReadStream("./html/map.html").pipe(response);

});


app.get('/test', function(req, res){
    req.session.test= 'test';
    req.session.tmp= 'tmp';
    req.session.save(function(){                               
        rsp.redirect('./html/map.html');
    });

});

app.all('*', function (request, response){

    response.writeHead(200,{"Content-Type":"text/html"}); 
    fs.createReadStream("./index.html").pipe(response);

});

app.listen(8888, function() {
    console.log("Application Running at port 8080");
})

