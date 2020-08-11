/*
* mongodb connection by using mongoose 
* 예외처리를 위한 Node.js promise 사용 
* Define Schemes by using mongoose.Schema
*/
var express = require('express'); 
var router = express.Router();

var mongoose = require('mongoose');
// Node.js의 native Promise 사용
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

var posts = require("../models/post"); // 스키마 불러오기

// Create
var postModel = new posts();
postModel.title = 'test';
postModel.content = 'test';
postModel.save().then(newPost => {
        console.log("Create 완료");
      })
      .catch(err => {
        console.log("err");
      });


module.exports = router;