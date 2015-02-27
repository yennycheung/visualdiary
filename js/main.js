$(function() {
	var height = $(window).innerHeight();
	function resizingElements(){
	    var height = $(window).innerHeight();
	    $(".frontpage").css("height", height-50);
	    var navHeight = $(".navigator").height();
	    $(".navigator").css("top", (height-navHeight)/2);
	}
	resizingElements();
	$(window).resize(function(event){
		resizingElements();
	});
});