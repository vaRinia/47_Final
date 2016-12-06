$(document).ready(function(){
	console.log("Hola Irving")
  	$(".js-menu").hide();
});

$(".js-show-make").click(function() {
	$(".page").addClass("make");
	$(".js-show-recipe").removeClass("active");
	$(".js-show-make").addClass("active");
});
$(".js-show-recipe").click(function() {
	$(".page").removeClass("make");
	$(".js-show-make").removeClass("active");
	$(".js-show-recipe").addClass("active");
	
});