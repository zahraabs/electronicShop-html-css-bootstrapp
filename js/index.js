$(document).ready(function(){
    $(".open--cart").click(function(){
        $(".open--cart").toggleClass("active--cart"); 
        $(".cart").fadeToggle();
    });
    $(".sale--timeout__counter").startTimer();
});

const swiper = new Swiper('.swiper', {
  loop: true,
    slidesPerView: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
  });

