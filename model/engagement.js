var Sequelize = require("sequelize");
var sequelize = require("../app/config/connection");


var Engagement = sequelize.define("engagement", {
  Engagement_ID: Sequelize.STRING,
  EmployeeID: Sequelize.STRING,
  ServiceID: Sequelize.STRING,
  Start_Date: Sequelize.DATE, 
  End_Date: Sequelize.DATE,
  Number_Of_Hours: Sequelize.STRING,
  ClientID: Sequelize.STRING,
  Status: Sequelize.STRING 
});

// Syncs with DB
Engagement.sync({ alter: true });


module.exports = Engagement;  