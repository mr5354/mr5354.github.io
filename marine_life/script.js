// var sky_des = $('#sky .des')[0];
// var epi_des = $('#epipelagic .des')[0];
// var mesopelagic = $('#mesopelagic')[0];
// var bathypelagic = $('#bathypelagic')[0];
// var abyssopelagic = $('#abyssopelagic')[0];
// var hadopelagic = $('#hadopelagic')[0];
// var layers = $('.layer');
var page = 0;
var active_animal = null;



//start of an attempt at one page scrolling
// window.scrollBy(0, window.innerHeight);


//parallax scroll but a bit choppy
// $(window).on('scroll', function() {
//     var val = window.scrollY % window.innerHeight();

//     $.each($('.des'), function(i) {
//         if (isInViewport($('.des')[i])) {
//             $('.des')[i].style.transform = 'translateY(' + val + 'px)';
//         }
//     });
// });


//image functions & manipulation

///image hover
// $('#sea img').hover(function() {
//     $(this).css('height', '22vmin');
// }, function() {
//     $(this).css('height', '20vmin');
// });


///image click
$('#sea img').click(function(e) {
    e.preventDefault();
    $('#cover').show(600);
    active_animal = this.alt;
    $('#' + active_animal).show(600);
    // $('#tbox').show();
    $('body').css('overflow', 'hidden');
});

///click on x to close box
$('.tbox img').click(function(e) {
    e.preventDefault();
    $('#cover').hide(600);
    $('#' + active_animal).hide(600);
    $('body').css('overflow', 'visible');
});


// if (page == 0) {
//     $('#sky').scrollIntoView();
// } else if (page == 1) {
//     $('#epipelagic').scrollIntoView();
// } else if (page == 2) {
//     $('#mesopelagic').scrollIntoView();
// } else if (page == 3) {
//     $('#bathypelagic').scrollIntoView();
// } else if (page == 4) {
//     $('#abyssopelagic').scrollIntoView();
// } else if (page == 5) {
//     $('#hadopelagic').scrollIntoView();
// }

//checks if element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


$("#sea").onepage_scroll({
    sectionContainer: "section",
    easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000, // AnimationTime let you define how long each section takes to animate
    pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {}, // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {}, // This option accepts a callback function. The function will be called after the page moves.
    loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true, // You can activate the keyboard controls
    responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});

window.addEventListener('scroll', function() {

});