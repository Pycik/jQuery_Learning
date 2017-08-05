$(function (){
	var link = $(".menu_link");
	var link_active = $(".menu_link_active");
	var menu = $(".menu");


	link.click(function(){
		link.toggleClass("menu_link_active");
		menu.toggleClass("menu_active");
	});
	link_active.click(function(){
		link.removeClass("menu_link_active");
	});	
});

// $(".menu_link").click(function(){
// 	$(".menu_link").toggleClass("menu_link_active")
	
// });

