$(document).ready(function(){
    $(".open--cart").click(function(){
        $(".open--cart").toggleClass("active--cart"); 
        $(".cart").fadeToggle();
    });
    $(".sale--timeout__counter").startTimer();
});

const swiper = new Swiper('.swiper--offers', {
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

  const swiper2 = new Swiper('.swiper--customers', {
    loop: true,
      slidesPerView: 1,
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
    
    
    
    const swiper3 = new Swiper('.swiper--support', {
    loop: true,
      slidesPerView: 5,
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