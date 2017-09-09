$(document).ready(function() {
    var page = $("html, body");

    $("html,body").animate({scrollTop: 0}, 100);

    setInterval(function(){
        $(".scrolldownarrow").stop().effect("bounce", { times:3, distance:20, easing:"easeInCubic" }, 'normal');
    }, 1500);

    $(".scrollbox").click(function(e) {

        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
           page.stop();
        });

        page.stop().animate({scrollTop: $("#about-me").position().top}, 1500, function(){
           page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
        });

       return false;
    });
});
