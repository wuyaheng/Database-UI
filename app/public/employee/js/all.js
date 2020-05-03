// Code here handles what how the page displays all of the characters
// It pings the server. The server then pings the database and displays all of the characters.

// make a get request to our api to grab every character
$.get("/api/employee", function(data) {

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
    $("#character-well-" + i).append("<td>" + data[i].Employee_ID + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].First_Name + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].Last_Name + "</td>");
    $("#character-well-" + i).append("<td>" + moment(data[i].DOB).format('L') + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].Street + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].City + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].State + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].Contact + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].Job_Title + "</td>");
  }
  $("#well-section").prepend("<tr><th>Employee ID</th><th>First Name</th><th>Last Name</th><th>Date of Birth</th><th>Street</th><th>City</th><th>State</th><th>Contact</th><th>Job Title</th></tr>");
});
