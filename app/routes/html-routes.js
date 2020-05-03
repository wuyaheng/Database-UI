var path = require("path");


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/menu.html"));
  });

  app.get("/employee", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/employee/view.html"));
  });


  app.get("/emplyee/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/employee/add.html"));
  });


  app.get("/employee/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/employee/all.html"));
  });

  app.get("/client", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/client/view.html"));
  });


  app.get("/client/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/client/add.html"));
  });


  app.get("/client/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/client/all.html")); 
  });


  app.get("/engagement", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/engagement/view.html"));
  });


  app.get("/engagement/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/engagement/add.html"));
  });


  app.get("/engagement/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/engagement/all.html")); 
  });


  app.get("/service", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/service/view.html"));
  });


  app.get("/service/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/service/add.html"));
  });


  app.get("/service/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/service/all.html")); 
  });

};
