$(document).ready(function () {
    var aboutFade = $(".about-container");
    var convFade = $(".conv-info-container");

    function fadeElementIn(element) {
        element.css("opacity", 0);
        element.addClass("scrollFadeIn");
        element.removeClass("scrollFadeOut");
    }

    function fadeElementOut(element) {
        element.css("opacity", 1);
        element.addClass("scrollFadeOut");
        element.removeClass("scrollFadeIn");
    }

    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if (windowpos >= 0.1 && windowpos <= 1400) {
            fadeElementIn(aboutFade);
        } else {
            fadeElementOut(aboutFade);
        }

        if (windowpos >= 1400) {
            fadeElementIn(convFade);
        } else {
            fadeElementOut(convFade);
        }
    });
});