var Employee = require("../../model/employee");
var Client = require("../../model/client");
var Engagement = require("../../model/engagement");
var Service = require("../../model/service");


module.exports = function(app) {
  app.get("/api/employee", function(req, res) {
      Employee.findAll({})
        .then(data => {
          res.json(data);
          })
    });

  app.post("/api/employee/new", function(req, res) {
    console.log(req.body)
    Employee.create({
      Employee_ID: req.body.Employee_ID,
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      DOB: req.body.DOB,
      Street: req.body.Street,
      City: req.body.City,
      State: req.body.State,
      Contact: req.body.Contact,
      Job_Title: req.body.Job_Title
    }).then(function(results) {
      res.end();
    });
  });


  app.get("/api/client", function(req, res) {
    Client.findAll({})
      .then(data => {
        res.json(data);
        })
  });

app.post("/api/client/new", function(req, res) { 
  console.log(req.body)
  Client.create({
    Client_ID: req.body.Client_ID,
    Client_Name: req.body.Client_Name,
    Client_Type: req.body.Client_Type,
    Street: req.body.Street,
    City: req.body.City,
    State: req.body.State,
    Contact: req.body.Contact 
  }).then(function(results) {
    res.end();
  });
});


app.get("/api/engagement", function(req, res) {
  Engagement.findAll({})
    .then(data => {
      res.json(data);
      })
});

app.post("/api/engagement/new", function(req, res) { 
  console.log(req.body)
  Engagement.create({
    Engagement_ID: req.body.Engagement_ID,
    EmployeeID: req.body.EmployeeID,
    ServiceID: req.body.ServiceID,
    Start_Date: req.body.Start_Date,
    End_Date: req.body.End_Date,
    Number_Of_Hours: req.body.Number_Of_Hours,
    ClientID: req.body.ClientID,
    Status: req.body.Status
  }).then(function(results) {
    res.end();
  });
});

app.get("/api/service", function(req, res) {
  Service.findAll({})
    .then(data => {
      res.json(data);
      })
});

app.post("/api/service/new", function(req, res) { 
  console.log(req.body)
  Service.create({
    Service_ID: req.body.Service_ID,
    ServiceDesc: req.body.ServiceDesc,
    Price_Per_Hour: req.body.Price_Per_Hour
  }).then(function(results) {
    res.end();
  });
});
};
