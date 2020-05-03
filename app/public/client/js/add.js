// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  var newClient = {
    Client_ID: $("#clientID").val().trim(),
    Client_Name: $("#clientName").val().trim(),
    Client_Type: $("#clientType").val().trim(),
    Street: $("#street").val().trim(),
    City: $("#city").val().trim(),
    State: $("#state").val().trim(),
    Contact: $("#contact").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/client/new", newClient)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      alert("Adding client...");
    });


  $("#clientID").val("");
  $("#clientName").val("");
  $("#clientType").val("");
  $("#street").val("");
  $("#city").val("");
  $("#state").val("");
  $("#contact").val("");
});
