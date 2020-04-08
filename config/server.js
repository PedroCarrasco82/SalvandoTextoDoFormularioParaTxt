var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');

var app = express();

app.set('view engine','ejs');
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(express.static('./app/views'));


consign()
    .include('app/routes')
    .then('app/controllers')
    .into(app);

module.exports = app;