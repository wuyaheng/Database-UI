getEngagement();

$(document).on("click", "button#deleteBtn", deleteEngagement);

function deleteEngagement(event) {
  event.preventDefault();
  var id = $(this).parent().siblings('td')[0].innerHTML;
  $.ajax({
    method: "DELETE",
    url: "/api/engagement/" + id
  }).then(getEngagement);
};


function getEngagement() {
  $("#well-section").empty();
  $.get("/api/engagement", function(data) {
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
      // $("#character-well-" + i).append("<td><button type='button' class='btn btn-outline-dark' id='deleteBtn'>Delete</button></td>");
    }
    $("#well-section").prepend("<tr><th>Engagement ID</th><th>Employee ID</th><th>Service ID</th><th>Start Date</th><th>End Date</th><th>Number of Hours</th><th>Client ID</th><th>Status</th></tr>");
  });
};


$('#myEngagementInput').on('keyup', function (e) {
  let searchValue = e.target.value;
  console.log(searchValue);
  var ul, li, value_1, value_2, value_3, value_4, value_5, value_6, value_7, value_8, i, txtValue_1, txtValue_2, txtValue_3 , txtValue_4, txtValue_5, txtValue_6, txtValue_7, txtValue_8; 
  ul = document.getElementById("well-section");
  li = ul.getElementsByClassName("well"); 
  for (i = 0; i < li.length; i++) {
    value_1 = li[i].getElementsByTagName("td")[0];
    value_2 = li[i].getElementsByTagName("td")[1];
    value_3 = li[i].getElementsByTagName("td")[2]; 
    value_4 = li[i].getElementsByTagName("td")[3]; 
    value_5 = li[i].getElementsByTagName("td")[4]; 
    value_6 = li[i].getElementsByTagName("td")[5]; 
    value_7 = li[i].getElementsByTagName("td")[6]; 
    value_8 = li[i].getElementsByTagName("td")[7]; 
    txtValue_1 = value_1.textContent || value_1.innerText;
    txtValue_2 = value_2.textContent || value_2.innerText;
    txtValue_3 = value_3.textContent || value_3.innerText;
    txtValue_4 = value_4.textContent || value_4.innerText;
    txtValue_5 = value_5.textContent || value_5.innerText;
    txtValue_6 = value_6.textContent || value_6.innerText;
    txtValue_7 = value_7.textContent || value_7.innerText;
    txtValue_8 = value_8.textContent || value_8.innerText;
    if (txtValue_1.indexOf(searchValue) > -1 || txtValue_2.indexOf(searchValue) > -1 || txtValue_3.indexOf(searchValue) > -1 || txtValue_4.indexOf(searchValue) > -1 || txtValue_5.indexOf(searchValue) > -1 || txtValue_6.indexOf(searchValue) > -1 || txtValue_7.indexOf(searchValue) > -1 || txtValue_8.indexOf(searchValue) > -1) {
      document.getElementsByClassName("well")[i].style.display = "";
    } else {
      document.getElementsByClassName("well")[i].style.display = "none";
    } 
  }
})
