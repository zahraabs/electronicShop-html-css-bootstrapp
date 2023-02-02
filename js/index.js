$(document).ready(function(){
    $(".open--cart").click(function(){
        $(".open--cart").toggleClass("active--cart"); 
        $(".cart").fadeToggle();
    });
    $(".sale--timeout__counter").startTimer();
});

const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

