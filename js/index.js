$(document).ready(function(){
    $(".open--cart").click(function(){
        $(".open--cart").toggleClass("active--cart"); 
        $(".cart").fadeToggle();
    });
});

