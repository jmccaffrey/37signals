$(document).ready(function() {
	$(".basecamp").hover(function() {
    	$(".t, .t-bc").toggleClass("hide");
    });
	$(".highrise").hover(function() {
	    $(".t, .t-hr").toggleClass("hide");
    });
	$(".campfire").hover(function() {
	    $(".t, .t-cf").toggleClass("hide");
    });
});