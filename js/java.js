$("#test_hide").click(function(){
    $("#test_hide").hide();
});

$("#test_alert").click(function(){
    alert("The button was clicked.");
});



$("#alert_h2").click(function() {
var test = $(".text h2").html();
alert(test);

});

$("#alert_length").click(function() {
var length = $(".text p").length;
alert(length);

});

$(document).ready(function() {
	$(".text p").addClass("black");

});

$(document).ready(function() {
	$(".black_button button").addClass("black");

});

$(document).ready(function() {
	$(".nav.navbar-nav ").addClass("menu");

});

$(document).ready(function() {
	$(".text h2").addClass("menu");

});