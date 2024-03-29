var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");

/*var sequelize = new Sequelize('example', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
});*/


var sequelize = new Sequelize("example", 'root', 'root', {
    host: "localhost",
    dialect: "mysql",
    logging: function () {},
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
    },
    define: {
        paranoid: true
    }
});


var db = {};
 
fs.readdirSync(__dirname).filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    }).forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });
 
Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});
 
db.sequelize = sequelize;
db.Sequelize = Sequelize;
 
module.exports = db;