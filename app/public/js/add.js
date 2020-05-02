// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newEmployee obj
  var newEmployee = {
    Employee_ID: $("#employeeID").val().trim(),
    First_Name: $("#firstName").val().trim(),
    Last_Name: $("#lastName").val().trim(),
    DOB: $("#DOB").val().trim(),
    Street: $("#street").val().trim(),
    City: $("#city").val().trim(),
    State: $("#state").val().trim(),
    Contact: $("#contact").val().trim(),
    Job_Title: $("#jobTitle").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newEmployee)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding employee...");
    });

  // empty each input box by replacing the value with an empty string
  $("#employeeID").val("");
  $("#firstName").val("");
  $("#lastName").val("");
  $("#DOB").val("");
  $("#street").val("");
  $("#city").val("");
  $("#state").val("");
  $("#contact").val("");
  $("#jobTitle").val("");
});
