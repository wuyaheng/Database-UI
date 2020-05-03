var Sequelize = require("sequelize");
var sequelize = require("../app/config/connection");


var Client = sequelize.define("client", {
  Client_ID: Sequelize.STRING,
  Client_Name: Sequelize.STRING,
  Client_Type: Sequelize.STRING,
  Street: Sequelize.STRING, 
  City: Sequelize.STRING,
  State: Sequelize.STRING,
  Contact: Sequelize.STRING 
});

// Syncs with DB
Client.sync({ alter: true });


module.exports = Client; 