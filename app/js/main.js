$(function(){

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 9,
    slidesToScroll: 0,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    rows: 3,
    slidesPerRow: 3
  });

  $(".reviews__items").slick({
    vertical: true,
    arrows: true,
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true
  });

  $(".featured__slider-items").slick({
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    // centerMode: true,
    dots: true,
    swipe: false
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