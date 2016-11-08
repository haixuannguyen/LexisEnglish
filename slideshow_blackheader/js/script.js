/**
 * Created by voiu on 10/6/16.
 */

/* To adjust carousel height */

// When the document is ready (is loaded)
$(document).ready(function () {

    // resize the slideshow to fit full height
    setTimeout(resizeSlideshow, 500);

    $('#myCarousel').carousel({
        interval: 3000
    });


    $("#course-slideshow").lightSlider({
        loop:true,
        keyPress:true,
        item: 1,
        pager: false
    });
    
    var studySlider = $("#study-slider").lightSlider({
        loop:true,
        item: 1,
        pager: false,
        mode: 'fade',
        useCSS: true,
        controls: false,
        speed: 400
    });

    $("#study-slider").mouseenter(function() {
        studySlider.play();
    });

    $("#study-slider").mouseleave(function() {
       studySlider.pause();
    });

    var workSlider = $("#work-slider").lightSlider({
        loop:true,
        item: 1,
        pager: false,
        mode: 'fade',
        useCSS: true,
        controls: false,
        speed: 400
    });

    var liveSlider = $("#live-slider").lightSlider({
        loop:true,
        item: 1,
        pager: false,
        mode: 'fade',
        useCSS: true,
        controls: false,
        speed: 400
    });

    $("#live-slider").mouseenter(function() {
        liveSlider.play();
    });

    $("#live-slider").mouseleave(function() {
        liveSlider.pause();
    });
});

// when the window is resized
var resizeId;
$(window).resize(function() {

    clearTimeout(resizeId);
    resizeId = setTimeout(resizeSlideshow, 500);
});

// The function to resize the slideshow to the current window's size
function resizeSlideshow() {
    // get screen height
    var screenHeight = $(window).height();
    var headerHeight = $("#header-container").outerHeight(true);

    var percent = ((screenHeight - headerHeight) / screenHeight) * 100;

    $("#slideshow-container").css("height", "" + percent + "%");
    $("#map").css("max-width", "" + (screenHeight - headerHeight) * 2 / 3 + "px");
    $("#map").css("top", "" + (screenHeight - headerHeight) / 8 + "px");
}
