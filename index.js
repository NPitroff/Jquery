// Test to make sure Jquery is working
// $("h1").css("color", "red");

//Code to change h1 to purple without Jquery
// for (var i=0; i<5; i++){
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
//   })
// }

// Code to change h1 to purple with Jquery
$("button").click(function(){
  $("h1").css("color", "purple");
});


// detect keystrokes inside the textbox
$("input").keydown(function(e){
  console.log(e.key);
});

// change the h1 to the keystrokes
$(document).keydown(function(e){
  $("h1").text(e.key);
});

// Adding an event listener with the 'on()' method
$(document).on("mouseover", function(){
  $("h1").css("color", "green")
});
