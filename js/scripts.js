// BUSINESS LOGIC

function userSelection(age, movie, time) {
    this.age = age;
    this.movie = movie;
    this.time = time;
}

// USER INTERFACE

$(document).ready(function(){
      var price = 5;
  $("form.tickets").submit(function(event){
    event.preventDefault();
    var age = $("#age").val();
    var selectedMovie = $("#movie").val();
    var time = $("#time").val();
    var userInfo = new userSelection(age, selectedMovie, time);
    if (userInfo.age > 17) {
      price = price + 2;
    };
    if (userInfo.time > 8) {
      price = price + 5;
    }
    if (selectedMovie === "premiere") {
      price = price + 4;
    };
       $(".result").append("<p>Hello! Your movie will be showing at " + time + " and will cost approximately " + price + " dollars. Please enjoy!</p>");
  });
});
