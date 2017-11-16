//business

function resetFields() {
    $("input#movie-name").val("");
    $("input#studio-name").val("");
    $("input#year-released").val("");
    $("input#budget").val("");
    $("input#gross").val("");
    $("input#tomato").val("");
}

//front-end
$(document).ready(function() {
  $("form#ratings-form").submit(function(event) {
    event.preventDefault();

    var  movieName = $("input#movie-name").val();
    var  studioName = $("input#studio-name").val();
    var  yearReleased = $("input#year-released").val();
    var  budget= $("input#budget").val();
    var  gross = $("input#gross").val();
    var  tomato = $("input#tomato").val();
  
    $("#movie-table").append(
      "<tr>" +
        "<td>" + movieName + "</td>" +
        "<td>" + studioName + "</td>" +
        "<td>" + yearReleased + "</td>" +
        "<td>" + budget + "</td>" +
        "<td>" + gross + "</td>" +
        "<td>" + tomato + "</td>" +
      "</tr>");
    resetFields();
  });
});
