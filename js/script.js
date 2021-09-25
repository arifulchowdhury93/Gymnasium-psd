$(function () {
    'use strict';


    //banner slider part start js
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 2000,
        arrows: false,
        dots: true,
    });
    
    //veno box js start
    $('.venobox').venobox();
    
    
    //testimonial slider part start js
    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    
    //Counter js start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    //Logo slider part start js
    $('.logo_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        arrows: true,
        dots: false,
        nextArrow: '<i class="fas fa-chevron-right next_arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
        centerMode: true,
        centerPadding: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
        ]
    });
    
    
    
    
    





});