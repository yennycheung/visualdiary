$(function() {
	var height = $(window).innerHeight();
	function resizingElements(){
	    var height = $(window).innerHeight();
	    $(".frontpage").css("height", height-50);
	}
	resizingElements();
	$(window).resize(function(event){
		resizingElements();
	});
});