/**
 * Created by voiu on 10/6/16.
 */

/* To adjust carousel height */

// When the document is ready (is loaded)
$(document).ready(function () {

    // resize the slideshow to fit full height
    resizeSlideshow();

    $('#myCarousel').carousel({
        interval: 3000
    });

    $("#course-slideshow").lightSlider({
        loop:true,
        keyPress:true,
        item: 2,
        pager: false
    });
});

// when the window is resized
var resizeId;
$(window).resize(function() {

    console.log("resized");

    clearTimeout(resizeId);
    resizeId = setTimeout(resizeSlideshow, 500);
});

// The function to resize the slideshow to the current window's size
function resizeSlideshow() {
    // get screen height
    var screenHeight = $(window).height();
    var headerHeight = $("#header-container").outerHeight(true);

    var percent = ((screenHeight - headerHeight) / screenHeight) * 100;

    console.log("ScreenHeight: "  + screenHeight + " , Header Height: " + headerHeight +  ",  Percentage: " + + percent + "%")

    $("#slideshow-container").css("height", "" + percent + "%");
    $("#map").css("max-width", "" + (screenHeight - headerHeight) * 2 / 3 + "px");
    $("#map").css("top", "" + (screenHeight - headerHeight) / 8 + "px");
}
