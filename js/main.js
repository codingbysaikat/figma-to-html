$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:'<button class="btn-s-prev slide-btn"><img src="images/icons/arrow-left.png" alt=""></button>',
        nextArrow:' <button class="btn-s-prev-next"><img src="images/icons/arrow-right-slide.png" alt=""></button>'
      });
    
  });