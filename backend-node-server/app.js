var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
var mysql = require('mysql');
var port = 8080;

// models
var models = require("./models");

// routes
var inventory = require('./routes/inventories');

//Sync Database
models.sequelize.sync().then(function () {
    console.log('connected to database')
}).catch(function (err) {
    console.log(err)
});

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// register routes
app.use('/inventories', inventory);

// index path
app.get('/', function (req, res) {
    console.log('app listening on port: ' + port);
    res.send('tes express nodejs mysql')
});

app.listen(port, function () {
    console.log('app listening on port: ' + port);
});
