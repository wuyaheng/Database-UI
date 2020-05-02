var Sequelize = require("sequelize");
var sequelize = require("../app/config/connection");


var Employee = sequelize.define("employee", {
  Employee_ID: Sequelize.STRING,
  First_Name: Sequelize.STRING,
  Last_Name: Sequelize.STRING,
  DOB: Sequelize.DATE, 
  Street: Sequelize.STRING,
  City: Sequelize.STRING,
  State: Sequelize.STRING,
  Contact: Sequelize.STRING,
  Job_Title: Sequelize.STRING
});

// Syncs with DB
Employee.sync({ alter: true });


module.exports = Employee; 