$(function() {
	var height = $(window).innerHeight();
	function resizingElements(){
	    var height = $(window).innerHeight();
	    $(".frontpage").css("height", height-50);
	    var navHeight = $(".navigator").height();
	    $(".navigator").css("top", (height-navHeight)/2);
	    $(".story").css("height", height);
	    var storyHeight = $(".story .container").height();
	    $(".story .container").css("padding-top",(height-storyHeight)/3);
	}
	resizingElements();
	$(window).resize(function(event){
		resizingElements();
	});
});