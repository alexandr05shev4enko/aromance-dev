$(function(){

  $('.featured__slider').slick({
    // dots: true,
    // arrows: true,
    // autoplay: false,
    // autoplaySpeed: 2000,
    // slidesToShow: 1,
    // slidesToScroll: 1
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

  
 


});