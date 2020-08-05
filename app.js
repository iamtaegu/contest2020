// load .env
require('dotenv').config();

var url = require('url');
var express = require('express'); 
var app = express(); 
var router = express.Router();
var fs = require('fs');

/*
* mongodb connection by using mongoose 
* 예외처리를 위한 Node.js promise 사용 
* Define Schemes by using mongoose.Schema
*/
var mongoose = require('mongoose');
// Node.js의 native Promise 사용
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));
// DB router 
app.use('/todos', require('./router/todos'));

router.get('/:id', function(request, response){

    var _url = request.url;
    var pathData = url.parse(_url, true).path;

    console.log (_url);
    console.log (pathData);

    response.writeHead(200,{"Content-Type":"text/html"}); 
    if(_url == '/' || _url == '/favicon.ico'){    
        fs.createReadStream("index.html").pipe(response); 
    } else {
        fs.createReadStream('.'+pathData).pipe(response); 
    }
});



app.all('*', function (request, response){

    response.writeHead(200,{"Content-Type":"text/html"}); 
    fs.createReadStream("index.html").pipe(response);

});

app.use('/', router);

app.listen(8080, function() {
    console.log("Application Running at port 8080");
})

