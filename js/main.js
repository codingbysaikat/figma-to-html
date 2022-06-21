$(document).ready(function(){
   
    $('.main-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        useCSS:false,
        prevArrow:'<button class="btn-s-prev slide-btn"><img src="images/icons/arrow-left.png" alt=""></button>',
        nextArrow:' <button class="btn-s-prev-next"><img src="images/icons/arrow-right-slide.png" alt=""></button>'
      });



     $('#short-menu').click(function(){
        $(this).fadeOut('',function(){
            $('.menu-cart').fadeIn('slow');
        });
        

     });
     $('.cross').click(function(){
        $('.menu-cart').fadeOut('slow',function(){
            $('#short-menu').fadeIn('slow');
        });
        
     })


  });
  




 
