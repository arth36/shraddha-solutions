$(document).ready(function(){
	$('.owl-carousel.banner-wrapper').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    items:1,
	    navText:false,
	    autoplay:true,
		autoplayTimeout:3000
	});

	$('.outer-prod .owl-carousel').owlCarousel({
	    /*loop:true,*/
	    nav:true,
	    items:4,
	    navText:false,
	    autoplay:true,
		autoplayTimeout:3000
	});
});

$(window).scroll(function(e) {
	  	if ($(window).scrollTop() > 0) {
	  		$('body').addClass('small-header');
	  	} else {
	  		$('body').removeClass('small-header');
	  	}
	  	});