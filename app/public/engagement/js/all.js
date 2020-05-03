// Code here handles what how the page displays all of the characters
// It pings the server. The server then pings the database and displays all of the characters.

// make a get request to our api to grab every character
$.get("/api/engagement", function(data) {

  // for each character that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var wellSection = $("<tr>");
    // add a class to this div: 'well'
    wellSection.addClass("well");
    // add an id to the well to mark which well it is
    wellSection.attr("id", "character-well-" + i);
    // append the well to the well section
    $("#well-section").append(wellSection);
    $("#character-well-" + i).append("<td>" + data[i].Engagement_ID + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].EmployeeID + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].ServiceID + "</td>");
    $("#character-well-" + i).append("<td>" + moment(data[i].Start_Date).format('L') + "</td>");
    $("#character-well-" + i).append("<td>" + moment(data[i].End_Date).format('L') + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].Number_Of_Hours + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].ClientID + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].Status + "</td>"); 
  }
  $("#well-section").prepend("<tr><th>Engagement ID</th><th>Employee ID</th><th>Service ID</th><th>Start Date</th><th>End Date</th><th>Number of Hours</th><th>Client ID</th><th>Status</th></tr>");
});
