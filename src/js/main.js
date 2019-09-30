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

$('.header_submit').click(function() { 
  
  $('.js-overlay-campaign').fadeIn();
  $('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign').fadeOut();
    
  }
});



$(function($){
  $('[name="phone"]').mask("+9(999) 999-9999");
});
