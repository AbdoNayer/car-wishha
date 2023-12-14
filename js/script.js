// Window Load screen

$(window).on('load', function () {

    // Loading Page
    $(".loading").delay(500).fadeOut(400, function() {
        $(".loader").fadeOut(1500);
    });
    $("body").css("overflow-y", "auto");

});

$(document).ready(function () {

    // Scroll For Section
    $(document).on("click", ".down-in",function(e) {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 100
        }, 50);
        e.preventDefault();
    });

    // Click Open Nav In Mobile
    $(document).on("click", ".click-nav, .overlay",function() {
        $(".handle").toggleClass("closed");
        $(".links-header").toggleClass("back");
        $(".overlay-fixed").toggleClass("back");
        $("body").toggleClass("overflow-hidden");
    });

    // Scroll Fix Header
    $(window).scroll(function () {
        if ($(window).width() > 767) {
            if($(this).scrollTop() > 30){
                $('.header-home').addClass('header-fixed')
            }else{
                $('.header-home').removeClass('header-fixed')
            }
        }
    });

    // Slider Home
    $('#sliderHome').owlCarousel({
        loop:true,
        margin:20,
        center:false,
        autoplay:true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 7000,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-left"></i>',
            '<i class="icon-right"></i>'
        ],
        responsive:{
            0:{
                items:1.2
            },
            900:{
                items:2.2
            },
            1000:{
                items:3.2
            }
        }
    });

    // Slider Home
    $('#sliderWishha').owlCarousel({
        loop:true,
        margin:10,
        center:false,
        autoplay:true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 7000,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-left"></i>',
            '<i class="icon-right"></i>'
        ],
        responsive:{
            0:{
                items:1.2
            },
            900:{
                items:1.2
            },
            1000:{
                items:3.2
            }
        }
    });

    // Animation Page
    AOS.init();
    
});


