var Sequelize = require("sequelize");

// Setting up our connection information
var sequelize = process.env.JAWSDB_URL
                ? mysql.createConnection(process.env.JAWSDB_URL)
                : new Sequelize("company_db", "root", "Diallo123_", {
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
