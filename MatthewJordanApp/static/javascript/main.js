$(document).ready(function() {
    var page = $("html, body");

    setInterval(function(){
        $(".scrolldownarrow").stop().effect("bounce", { times:3, distance:20, easing:"easeInCubic" }, 'normal');
    }, 1500);

    $(".scrolldown").click(function(e) {

        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
           page.stop();
        });

        page.stop().animate({scrollTop: $("#resume").position().top}, 1500, function(){
           page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
        });

       return false;
    });
});
