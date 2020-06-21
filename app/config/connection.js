var Sequelize = require("sequelize");

// Setting up our connection information
var sequelize = process.env.JAWSDB_URL
                ? new Sequelize("q1ag5tsn9d0gjfb1", "uq9c3h79p0iw9v3w", "sgjo9ihijccvgy2v", {
                  host: "i2cpbxbi4neiupid.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
                  port: 3306,
                  dialect: "mysql",
                  pool: {
                    max: 5,
                    min: 0,
                    idle: 10000
                  }
                })
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
