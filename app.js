var url = require('url');
var express = require('express'); 
var app = express(); 
var router = express.Router();
var fs = require('fs');

var morgan = require('morgan');

//app.use(morgan('combined'));

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

