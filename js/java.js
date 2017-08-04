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

function blocker() {
	$(".row.block h2").addClass("blue");
}
$(document).ready(blocker);

$(document).ready(function() {
	console.log('Hello');
	console.log('25');
	console.log($('blue').length);

});

$(function() {
	$(".row.block p").css("color","purple");
	$(".row.block p").css("font-size","20px");
	$(".row.block p").css("border","dotted 2px #aaa");
});

$(function() {
	$(".row.block h3").html("Hello It's Me 0_x");
	$(".row.block h3").css("color","red");
	$(".row.block h3").css("border","solid 5px #d2a5e3");

});

$("#btn_start").click(function() {
	$("#letters")
	.css("background","#111")
	.css("color","#fff")
	.css("font-size","20px")
	.css("border","solid 10px yellow")
});

$("#btn_reset").click(function() {
	location.reload();
});

$("#btn_delete").click(function() {
	$("#letters").hide();
});

$("#btn_delete_all").click(function() {
	$("html").hide();
});


//$("#content").css("color","green")
//$(".wraper").css("color","green")
//$(".row h1,h2").css("color","green")
//$("article").find("h2").css("color","green")
//$("#content").prev().css("color","red")
//$("#content").next().css("color","red")
//$("article > h2").css("color","red")
//$("article > *").css("color","red")
$("div").find("button").css("color","yellow");

$(".wraper p").css({"color":"grey",
					"font-size":"20px",
					"margin-left":"120px",
					"border":"solid 3px #aae",				
});

$(".wraper h2").css({color:"#eae",
					fontSize:"20px",
					marginLeft:"50px",
					border:"solid 3px #aef",				
});

$("img").css({	height:"200px",
				width:"300px",		
})

$("img").attr("src","img/bg1.jpg")

$("a#google").attr({ 

"href":"https://www.youtube.com/"	

});