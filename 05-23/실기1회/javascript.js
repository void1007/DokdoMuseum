$(document).ready(function(){
    $('.navi li').mouseover(function(){
        $('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $('.submenu').stop().slideUp(500);
    })
})

setInterval(function(){
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginTop:-350});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginTop:-700});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginTop:0});
    $('.slidelist').delay(2000);
})