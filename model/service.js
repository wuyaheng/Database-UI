var Sequelize = require("sequelize");
var sequelize = require("../app/config/connection");


var Service = sequelize.define("service", {
  Service_ID: Sequelize.STRING,
  ServiceDesc: Sequelize.STRING,
  Price_Per_Hour: Sequelize.INTEGER
});

// Syncs with DB
Service.sync({ alter: true });


module.exports = Service;  