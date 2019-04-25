$(document).ready(function () {
    var s = $(".about-container");
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if (windowpos >= 150 && windowpos <= 1000) {
            s.css("opacity", 0);
            s.addClass("scrollFadeIn");
            s.removeClass("scrollFadeOut");
        } else {
            s.css("opacity", 1);
            s.addClass("scrollFadeOut");
            s.removeClass("scrollFadeIn");
        }
    });
});