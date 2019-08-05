import jQuery from "jquery";
import 'slick-carousel';

jQuery(document).ready(function () {
 

  //Nav toggle
  $(".btn-nav").on("click", function() {
		let target = $(this).data("target");
    $(target).toggleClass("nav-open");
    $(this).toggleClass("btn-nav_active");
	}); 


  //Lang toggle
  $(".lang-bcl__btn").on("click", function() {
		let target = $(this).data("target");
    $(target).toggleClass("lang-open");
    $(this).toggleClass("lang-bcl__btn_active");
	}); 


  //Slider carousel
  $('.items-slider__bottom').each(function(index, el){
    let $carousel = $(el);
    let $arrows = $carousel.parents('.items-slider').find('.slider-btn').children();
    
      $carousel.slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      prevArrow: $arrows.filter('.slider-btn__left'),
      nextArrow: $arrows.filter('.slider-btn__right'),
      variableWidth: true,
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
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    });

  //Item hover
  $('.item').mouseenter(function(){
    $(this).children('.item__top').find('.item__linkBlk').css("display", "flex"); 
  });
  $('.item').mouseleave(function(){
    $(this).find('.item__linkBlk').css("display", "none");
  });

  //Cart link
  $('.cart').click(function() {
    window.open('/cart.html', '_self');
      });

});