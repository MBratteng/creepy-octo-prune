$(document).ready(function() { 
    "use strict";


    // Mobile nav

    $('.mobile-toggle').click(function() {
        $(this).closest('nav').toggleClass('nav-open');
    });

    // Navbar Sticky

    (function() {
        var docElem = document.documentElement,
            didScroll = false,
            stickynav = 600;
            document.querySelector( '.transparent' );
        function init() {
            window.addEventListener( 'scroll', function() {
                if( !didScroll ) {
                    didScroll = true;
                    setTimeout( scrollPage, 50 );
                }
            }, false );
        }
        
        function scrollPage() {
            var sy = scrollY();
            if ( sy >= stickynav ) {
                $( '.transparent' ).addClass('sticky');
            }
            else {
                $( '.transparent' ).removeClass('sticky');
            }
            didScroll = false;
        }
        
        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }        
        init();        
    })();


    // Append .background-image-holder <img>'s as CSS backgrounds

    $('.background-image-holder').each(function() {
        var imgSrc = $(this).children('img').attr('src');
        $(this).css('background', 'url("' + imgSrc + '")');
        $(this).children('img').hide();
        $(this).css('background-position', 'initial');
        $(this).css('background-attachment', 'fixed');
        $(this).css('background-position', '50% 0');
        $(this).css('background-repeat', 'no-repeat');
    });

    // Fade in background images

    setTimeout(function() {
        $('.background-image-holder').each(function() {
            $(this).addClass('fadeIn');
        });
    }, 200);

    // Owl Carousel Options

    // Map Holder Overlay
    
    $('.map-holder').click(function(){
        $(this).addClass('on');
    });
    
    $(window).scroll(function(){
        if($('.map-holder').hasClass('on')){
            $('.map-holder').removeClass('on');
        }
    });
    
    // Map Details Holder
    
    $('.details-holder').each(function(){
        $(this).css('height', $(this).width());
    });
    
    $('.details-holder').mouseenter(function(){
        $(this).closest('.map-overlay').addClass('fade-overlay');
    }).mouseleave(function(){$(this).closest('.map-overlay').removeClass('fade-overlay');});

});


function toggleMobileMenu(imgdir){
    var img_elem = $("#mobile_menu_img");
    if (img_elem.attr('src').match(new RegExp("/mobile_menu_open.png$"))) {
        $( "#mobile-menu" ).animate({
            'top': '0px',
            'opacity': '1'
        }, 1000, 'easeOutQuint',function() { });
            // Animation complete.
        img_elem.attr('src', imgdir + "../assets/img/mobile_menu_close.png");
    } else {
        $( "#mobile-menu" ).animate({
            'top': '-100vh',
            'opacity': '1'
        }, 1000, 'easeOutQuint',function() {
        // Animation complete.
        });
        img_elem.attr('src', imgdir + "../assets/img/mobile_menu_open.png");
    }
}
