// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  var newEngagement = {
    Engagement_ID: $("#engagementID").val().trim(),
    EmployeeID: $("#employeeID").val().trim(),
    ServiceID: $("#serviceID").val().trim(),
    Start_Date: $("#startDate").val().trim(),
    End_Date: $("#endDate").val().trim(),
    Number_Of_Hours: $("#numberOfHours").val().trim(),
    ClientID: $("#clientID").val().trim(),
    Status: $("#status").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/engagement/new", newEngagement)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      alert("Adding engagement...");
    });


  $("#engagementID").val("");
  $("#employeeID").val("");
  $("#serviceID").val("");
  $("#startDate").val("");
  $("#endDate").val("");
  $("#numberOfHours").val("");
  $("#clientID").val("");
  $("#status").val("");
});
