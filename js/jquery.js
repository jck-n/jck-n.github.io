$(document).ready(function () {
    var aboutFade = $(".about-container");
    var convFade = $(".conv-info-container");

    function fadeElementIn(element) {
        element.css("opacity", 0);
        element.addClass("scrollFadeIn");
        element.removeClass("scrollFadeOut");
        element.delay(100);
    }

    function fadeElementOut(element) {
        element.css("opacity", 1);
        element.addClass("scrollFadeOut");
        element.removeClass("scrollFadeIn");
        element.delay(100);
    }

    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if (windowpos >= 25 && windowpos <= 1500) {
            fadeElementIn(aboutFade);
        } else {
            fadeElementOut(aboutFade);
        }

        if (windowpos >= 1200) {
            fadeElementIn(convFade);
        } else {
            fadeElementOut(convFade);
        }
    });
});