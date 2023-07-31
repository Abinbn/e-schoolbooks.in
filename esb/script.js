/*----------------------------------------------------*/
/* Mobile Navigation
------------------------------------------------------ */

$('.mobileToggle').click(function() {
    if ($('.mainNav').hasClass('openNav')) {
        $('.mainNav').removeClass('openNav');
    } else {
        $('.mainNav').addClass('openNav');
    }
});

$('.mainNav li a').click(function() {
    if ($('.mainNav').hasClass('openNav')) {
        $('.navigation').removeClass('openNav');
        $('.mainNav').removeClass('openNav');
    }
});

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

$(document).ready(function () {
  // This function runs when the document (HTML) has finished loading

  $('.smoothscroll').on('click',function (e) {
    // This event handler runs when a click event occurs on an element with the class "smoothscroll"

    e.preventDefault(); 

// Prevents the default click behavior (e.g., following a link)

    var target = this.hash, 

// Retrieves the hash value of the clicked element (e.g., "#section")

    $target = $(target); 

// Creates a jQuery object from the target hash value

    $('html, body').stop().animate({
      

// Animates the scroll position of the <html> and <body> elements

      'scrollTop': $target.offset().top
    }, 1000, 'swing', function () {
      

// The animation lasts for 1000 milliseconds with a "swing" easing function (best is 800)

      window.location.hash = target; 

// Updates the window's hash value to maintain the URL state
    });
  });

});


/*----------------------------------------------------*/
/* Hero Animation
------------------------------------------------------ 


var hero = new TimelineMax({});
	hero.staggerFrom(".first", 0.7, {opacity: 0}, 0.5)
		.staggerFrom(".second", 0.5, {opacity: 0, y: 20}, 0.4, "-=0.2");

*/


