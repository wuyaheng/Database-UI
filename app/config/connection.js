var Sequelize = require("sequelize");

// Setting up our connection information
var sequelize = process.env.JAWSDB_URL
                ? new Sequelize("j4b8wlcmhefl8ha3", "f9c4oz4nl6no6qhv", "alwdfwp5rxbgs1hw", {
                  host: "k2fqe1if4c7uowsh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
                  port: 3306,
                  dialect: "mysql",
                  pool: {
                    max: 5,
                    min: 0,
                    idle: 10000
                  }
                })
                : new Sequelize("company_db", "root", "", {
                  host: "localhost",
                  port: 3306,
                  dialect: "mysql",
                  pool: {
                    max: 5,
                    min: 0,
                    idle: 10000
                  }
                });



module.exports = sequelize;
