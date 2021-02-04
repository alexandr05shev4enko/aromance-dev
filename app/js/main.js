$(function(){

  // $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'
  // });
  // $('.slider-nav').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: false,
  //   arrows: false,
  //   focusOnSelect: true,
  // });

  $(".reviews__items").slick({
    vertical: true,
    arrows: true,
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    swipe: false
  });

  $(".featured__slider-items").slick({
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    // centerMode: true,
    dots: true,
    swipe: false,
    responsive: [
      {
      breakpoint: 670,
      settings: "unslick"
      }
    ]
  });

  $('.select-style, .product-descr__select').styler();
  


  $("[data-fancybox]").fancybox({
    smallBtn:true
  });

  $(".search-icon").on("click", function(){
    $(".search-modal").addClass("search-modal--active")
  });

  $(".search-modal__cross").on("click", function(){
    $(".search-modal").removeClass("search-modal--active")
  });

  $(".header-top__bag-icon").on("click", function(){
    $(".bag-modal").addClass("bag-modal--active");
  });

  $(".bag-modal__bag-icon, .bag__close").on("click", function(){
    $(".bag-modal").removeClass("bag-modal--active");
  });

  $(".header-top__btn").on('click', function(){
    $(".header-top__btn").addClass("header-top__btn--active");
    $(".mobile").addClass("mobile--active");
  });

  $(".mobile__btn").on('click', function(){
    $(".header-top__btn").removeClass("header-top__btn--active");
    $(".mobile").removeClass("mobile--active");
  })

  $("a.header-top__menu-icon").on("click", function(){
    if ($(".mobile").hasClass("mobile--active")){
      $(".mobile").removeClass("mobile--active");
    }
  });

  $(".footer-mobile__menu-select, .footer-mobile__about-select").on("click", function(){
    $(this).toggleClass("footer-mobile__menu-select--active")
  });

  // $("a.footer-mobile__menu-link").on("click", function(){
  //   if ($(".footer-mobile__menu-select").hasClass("footer-mobile__menu-select--active")){
  //     $(".footer-mobile__menu-select").removeClass("footer-mobile__menu-select--active");
  //   }
  // });

  // $(".footer-mobile__menu-select--active").on("click", function(){
  //   $(this).removeClass("footer-mobile__menu-select--active")
  // });

  // var currentSlide = $('.featured__slider-items').slick('slickCurrentSlide');

  // if(currentSlide){
  //   console.log('it`s work');
  //   $(".featured__slider-item").addClass("featured__slider-item--active");
    
  // }


  // $('.your-element').on('afterChange', function(event, slick, currentSlide){
  //   console.log(currentSlide);
  // }); 

  // $('.featured__slider-items').on('afterChange', function(event, slick, currentSlide){
  //   $('.slick-active p').addClass('visible');
  //   $('.slick-active p').removeClass('hidden');
  // });

  // $('.featured__slider-items').on('beforeChange', function(event, slick, currentSlide){
  //   $('.slick-active p').removeClass('visible');
  //   $('.slick-active p').addClass('hidden');
  // });

  // $(".featured__slider-items .featured__slider-item").on("click", function() {
  //   const index = $(this).attr("data-slick-index");
  //   $(".featured__slider-items").slick("slickGoTo", index);
  // });

});