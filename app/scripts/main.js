/**
 * Main JavaScript methods
 *
 */

"use strict";

//
// Sticky menu
//
$(".navbar").sticky({topSpacing: 0});

//
// Vegas
//
$.vegas("slideshow", {
    backgrounds:[
        { src:"images/slider2/1.jpg", fade:1000 },
        { src:"images/slider2/2.jpg", fade:1000 },
        { src:"images/slider2/3.jpg", fade:1000 }
    ]
})("overlay", {
    src:"img/overlays/16.png"
});
$( "#vegas-next" ).click(function() {
    $.vegas("next");
});
$( "#vegas-prev" ).click(function() {
    $.vegas("previous");
});

//
// Scroll spy and scroll filter
//
$("#main-menu").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollThreshold: 0.5,
    scrollSpeed: 750,
    filter: "",
    easing: "swing"
});

//
// Charts
//
$(".chart").waypoint(function() {
    $(this).easyPieChart({
        barColor: "#3498db",
        size: "150",
        easing: "easeOutBounce",
        onStep: function(from, to, percent) {
            $(this.el).find(".percent").text(Math.round(percent));
        }
    });
}, {
    triggerOnce: true,
    offset: "bottom-in-view"
});
