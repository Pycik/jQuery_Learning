$(function (){
	var link = $(".menu_link");
	var link_active = $(".menu_link_active");
	var menu = $(".menu");
	var nav_click = $(".menu a");
	


	link.click(function(){
		link.toggleClass("menu_link_active");
		menu.toggleClass("menu_active");
	});
	nav_click.click(function(){
		link.toggleClass("menu_link_active");
		menu.toggleClass("menu_active");
	
	});	
});

// $(".menu_link").click(function(){
// 	$(".menu_link").toggleClass("menu_link_active")
	
// });


$(".buttonUp").click(function(){
	location.reload();
	});


