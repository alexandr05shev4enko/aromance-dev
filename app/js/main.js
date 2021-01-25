$(function(){

  

  $(".featured__slider-items").slick({
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    // centerMode: true,
    dots: true,
    swipe: false
  });

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