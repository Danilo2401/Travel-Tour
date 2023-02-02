$(document).ready(function(){
    
    $(".menu-toggle").click(function(){
        $(".header-links ul li").slideToggle();
    });

    $(window).scroll(function(){

       let scrollfromTop = $(window).scrollTop();

       if (scrollfromTop > 1000) {
            $("#scrollTop").fadeIn();
       }else{
            $("#scrollTop").fadeOut();
       }

    });

    $("#scrollTop").click(function(){

        $("html,body").animate({scrollTop:0},200);

      });


});
