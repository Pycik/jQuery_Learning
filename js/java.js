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

"href":"https://www.youtube.com/",
"title":"youtube",

});

$("header a").click(function(event){
	alert("Go to Page")
	event.preventDefault();
	event.stopPropagation();

});

$("header").click(function(event){
	alert("Go to Page ????????")
	
});

$("h2 a").click(function(event){
	alert("Go to Page")
	return false;
	
});

$("#number").keyup(function(){
	var Value = $(this).val();
	$("#msg").text("Your Number: " + Value);
});

$(".anim").click(function(){
	$(this).hide("slow");
});

$(".anim2").click(function() {
	$(this).hide("fast",function(){
		alert("Hello,your text is close!");
	});
});


// $("#stick").click(function(){
// 	$("#stick").css("color","red");
// 	$(".text_none").slideDown("slow");
// });

// function changeClass() {
// 	$(this).prev().toggleClass("active")
// }
// 	$(function(){
// 		$("article h2").click(function(){
// 			$(this).next().slideToggle();
// 			$(this).toggleClass("active");
		
// 	});
// });


// 	$(function() {
// 		$("article h2").click(function(){
// 			$(this).next().slideToggle();		
// 	});
// });


	
$("article h2").click(function(){
	$("#stick").css("color","red");
	$(this).next().slideToggle();		
});

$("#hider_text").click(function(){
	$(".container p").hide("slow");
});

$("#show_text").click(function(){
	$(".container p").show("fast");
});

$("#hide_show").click(function(){
	$(".container p").toggleClass("hider");
});

$("#circle_1").click(function() {
	$(this).fadeOut(1600);
	$(this).fadeIn(1600);
});

$("#circle_2").click(function() {
	$(this).fadeTo("slow", 0.2);	
});


// $("#circle_3").animate ({
// 	"opacity" : "hide",			
// });

// $("#circle_3").animate ({
// 	"opacity" : "show",			
// });

// $("#circle_3").animate ({"opacity" : "-=0.9",})
// 			  .animate ({"height" : "+=150px",})
// 			  .animate ({"width" : "+=250px",})
// 			  .animate ({"opacity" : "1",})
// 			  .animate ({"height" : "80px",})
// 			  .animate ({"width" : "80px",})

$("#circle_3").click(function() {

	$(this).animate ({"opacity" : "-=0.9"})
		   .animate ({"height" : "+=150px"})
		   .animate ({"width" : "+=250px"})
		   .animate ({"opacity" : "1"})
		   .animate ({"height" : "80px"}).stop()
		   .animate ({"width" : "80px"},{queue:false})
		   .animate ({"height" : "180px"})
		   .animate ({"height" : "100px"})
});
// $.fx.off = true

var myDiv = $('<div id="my" class="page">Hello my Friend </div>').appendTo("header,#letters").css({color:"red",
																						  fontWeight:"bold",
																						  fontSize:"20px"
	});

var myDiv =$('<div>Hello</div>').attr({'id':'my','class':'page'}).appendTo("header");

// var myDiv = document.createElement('div');
// 	myDiv.id = "my";
// 	myDiv.className = "page";

$(".circle").after("<hr/>").before("<hr/>");
$("<hr/>").insertAfter("h2");
$("footer").append("<hr/>");
$("<p>Last</p>").appendTo("#last_p p");
$("<p>Last of Last</p>").prependTo("#last_p h2");

