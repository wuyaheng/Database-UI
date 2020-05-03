// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  var newService = {
    Service_ID: $("#serviceID").val().trim(),
    ServiceDesc: $("#serviceDesc").val().trim(),
    Price_Per_Hour: $("#pricePerHour").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/service/new", newService)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      alert("Adding service...");
    });

  $("#serviceID").val("");
  $("#serviceDesc").val("");
  $("#pricePerHour").val(""); 
});
