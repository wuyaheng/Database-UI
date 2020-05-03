// Code here handles what how the page displays all of the characters
// It pings the server. The server then pings the database and displays all of the characters.

// make a get request to our api to grab every character
$.get("/api/client", function(data) {

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
    $("#character-well-" + i).append("<td>" + data[i].Client_ID + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].Client_Name + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].Client_Type + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].Street + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].City + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].State + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].Contact + "</td>");
  }
  $("#well-section").prepend("<tr><th>Client ID</th><th>Client Name</th><th>Client Type</th><th>Street</th><th>City</th><th>State</th><th>Contact</th></tr>");
});
