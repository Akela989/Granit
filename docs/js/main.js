// MENU
$(function() {
	var link = $('.m-menu-link');
	var close = $('.close-menu');
	var menu = $('.m-menu');
	link.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu_active');
	});
	close.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu_active');
	});
});




$(function (){
    $('a[href^="#"]').click(function(){
    	let target = $(this).attr('href');
    	$('html, body').animate(
           {
           	scrollTop:$(target).offset().top
           },
           800
    	);
    });
});



// FIXED TOP
window.onscroll = function showTopSide() {
	var topSide = document.querySelector('.header_top_side');

    if(window.pageYOffset > 200) {
    	topSide.classList.add('top-side_fixed');
    } else {
    	topSide.classList.remove('top-side_fixed');
    }
}



new WOW().init();