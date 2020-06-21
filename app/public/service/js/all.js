getService();

$(document).on("click", "button#deleteBtn", deleteService);

function deleteService(event) {
  event.preventDefault();
  var id = $(this).parent().siblings('td')[0].innerHTML;
  $.ajax({
    method: "DELETE",
    url: "/api/service/" + id
  }).then(getService);
};


function getService() {
$("#well-section").empty();
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
    // $("#character-well-" + i).append("<td><button type='button' class='btn btn-outline-dark' id='deleteBtn'>Delete</button></td>");
  }
  $("#well-section").prepend("<tr><th>Service ID</th><th>Service Description</th><th>Price Per Hour</th></tr>");
});
}

$('#myServiceInput').on('keyup', function (e) {
  let searchValue = e.target.value;
  console.log(searchValue);
  var ul, li, value_1, value_2, value_3, i, txtValue_1, txtValue_2, txtValue_3;
  ul = document.getElementById("well-section");
  li = ul.getElementsByClassName("well"); 
  for (i = 0; i < li.length; i++) {
    value_1 = li[i].getElementsByTagName("td")[0];
    value_2 = li[i].getElementsByTagName("td")[1];
    value_3 = li[i].getElementsByTagName("td")[2]; 
    txtValue_1 = value_1.textContent || value_1.innerText;
    txtValue_2 = value_2.textContent || value_2.innerText;
    txtValue_3 = value_3.textContent || value_3.innerText;
    if (txtValue_1.indexOf(searchValue) > -1 || txtValue_2.indexOf(searchValue) > -1 || txtValue_3.indexOf(searchValue) > -1) {
      document.getElementsByClassName("well")[i].style.display = "";
    } else {
      document.getElementsByClassName("well")[i].style.display = "none";
    }
  }
})