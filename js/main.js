$(function() {
	var height = $(window).innerHeight();
	function resizingElements(){
	    var height = $(window).innerHeight();
	    $(".frontpage").css("height", height-50);
	    var navHeight = $(".navigator").height();
	    $(".navigator").css("top", (height-navHeight)/2);
	    var storyHeight = $(".story .container").height();
	    if (height>storyHeight){
	    	 $(".story").css("height", height);
	    	  $(".story .container").css("padding-top",(height-storyHeight)/3);
	    }    
	}
	resizingElements();
	$(window).resize(function(event){
		resizingElements();
	});

	$(".circle").click(function(){
		$(".circle").removeClass("active");
		$(this).addClass("active");
	});
	// $(window).scroll(function(event){
	//     didScroll = true;
	// });
	// setInterval(function() {
	//     if (didScroll) {
	//         hasScrolled();
	//         didScroll = false;
	//     }
	// }, 250);

	// function hasScrolled(){
	// 	console.log(location.href);
	// }

	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	});
});

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}