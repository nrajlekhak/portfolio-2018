$(document).ready(function(){
    $(".begin").on("click",function(){
        $('html, body').animate({
            scrollTop: $("#nav-bar").offset().top+1
        }, 700); 
    });
    $(".down").on("click",function(){
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 700);       
    });
   
});