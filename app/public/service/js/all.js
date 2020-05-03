
$.get("/api/service", function(data) {
  for (var i = 0; i < data.length; i++) {
    var wellSection = $("<tr>");
    // add a class to this div: 'well'
    wellSection.addClass("well");
    // add an id to the well to mark which well it is
    wellSection.attr("id", "character-well-" + i);
    // append the well to the well section
    $("#well-section").append(wellSection);
    $("#character-well-" + i).append("<td>" + data[i].Service_ID + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].ServiceDesc + "</td>");
    $("#character-well-" + i).append("<td>" + data[i].Price_Per_Hour + "</td>");
  }
  $("#well-section").prepend("<tr><th>Service ID</th><th>Service Description</th><th>Price Per Hour</th></tr>");
});
