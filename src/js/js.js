$(function(){

/* Set numbers */

$('.number span').each(function(ind, el){
	$(this).text(ind + 1);
});

/* End set numbers */


/* Hamburger menu */

var $hamburger = $('.hamb-container');
var $menu = $('nav.header-nav');

	$hamburger.on('click', function(e){
		$hamburger.toggleClass('isopened');
		$menu.toggleClass('isopened');
	});

/* End Hamburger menu */

/* Close hamburger menu on breakpoint */

$(window).on('resize', function(){
	if( $(window).outerWidth(true) >= 1095 ){
		$('.isopened').removeClass('isopened');
	}
});

/* End close */

/* Easing scroll */

var $links = $('.button_link');

	$links.on('click', function(e){
		e.preventDefault();
		var target = $(e.target).attr('href');
		var offset = 20;

		$('html, body').animate({
			scrollTop: $(target).offset().top - offset
		}, 500);
		return false;
	});

/* End scroll */


});