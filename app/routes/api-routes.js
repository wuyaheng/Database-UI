var Employee = require("../../model/employee");


// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/:id?", function(req, res) {
    if (req.params.characters) {
      Employee.findAll({
        where: {Employee_ID: req.params.Employee_ID}
      })
        .then(data => {
          console.log('data-searched:', data[0]);   
          res.json(data[0]);
          
        })
        .catch(e => {throw e});

    } else {
      Employee.findAll({})
        .then(data => {
          res.json(data);
          })
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {
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
};
