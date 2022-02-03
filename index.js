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
