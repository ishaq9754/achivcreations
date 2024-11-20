$(document).on('ready', function ($) {
    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");

    /* Scroll to top
    ===================*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /* Gallery Slider Active
    =============================*/
    $('.blog-slide').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        center: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    /* Gallery Slider Active
    =============================*/
    $('.testimonial-slide').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        center: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
        items: 1,
    });
    var work_slide_2 = $('.work_details');
    work_slide_2.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        dots: true,
        autoplayTimeout: 1000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
    // Book List Slider
    var work_slide = $('.work_photo');
    work_slide.owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        autoplayTimeout: 1000,
        smartSpeed: 1000,
        mouseDrag: true,
        touchDrag: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });
    $('.work_nav .testi_next').on('click', function () {
        work_slide.trigger('next.owl.carousel');
    });
    $('.work_nav .testi_prev').on('click', function () {
        work_slide.trigger('prev.owl.carousel');
    });

    work_slide.on('translate.owl.carousel', function (property) {
        $('.work-details-content .owl-dot:eq(' + property.page.index + ')').click();
    });
    work_slide_2.on('translate.owl.carousel', function (property) {
        $('.work-photo-list .owl-dot:eq(' + property.page.index + ')').click();
    });
    /*------------------------
    Sticky Navbar jQuery
    -------------------------*/
    function sticky_relocate() {
        var window_top = $(window).scrollTop();
        var div_top = $('#sticky-helper').offset().top;
        if (window_top > div_top) {
            $('.mainmenu-area').addClass('sticky');
        } else {
            $('.mainmenu-area').removeClass('sticky');
        }
    }
    $(window).scroll(sticky_relocate);
    sticky_relocate();
    $('.price-table').on('mouseenter', function () {
        $('.price-table').removeClass('active');
        $(this).addClass('active');
    });
    $('.price-table').on('mouseleave', function () {
        $('.price-table').removeClass('active');
        $('.main-price').addClass('active');
    });
    /*--------------------
    MAGNIFIC POPUP JS
    ----------------------*/
    var magnifPopup = function () {
        $('.work-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };
    // Call the functions 
    magnifPopup();
    /*--------------------------
    Counter-up
    ---------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    /*---------------------------
    MICHIMP INTEGRATION
    -----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'http://facebook.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=6d023c55e5', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscrie-form input, .subscrie-form button').fadeOut();
            }
        }
    });

    /*--------------------
    jQuery Ripples
    ---------------------*/
    if (typeof $.fn.ripples == 'function') {
        try {
            $('.ripple').ripples({
                resolution: 500,
                perturbance: 0.04
            });
        } catch (e) {
            $('.error').show().text(e);
        }
    }

    /*--------------------
    Jquery-typing
    ------------------*/
    $(".typing").typed({
        strings: ["Experience", "Exposure", ],
        typeSpeed: 50,
        loop: true,
        backDelay: 1000,
        fadeOutSpeed: 500,
        cursorChar: "_",
    });

    /*-------------------
    Preloader Js
    ---------------------*/
    jQuery(window).on("load", function () {
        $('.preloader').fadeOut(500);
        /*WoW js Active
           =================*/
        new WOW().init({
            mobile: false,
        });
    });


}(jQuery));