// var sky_des = $('#sky .des')[0];
// var epi_des = $('#epipelagic .des')[0];
// var mesopelagic = $('#mesopelagic')[0];
// var bathypelagic = $('#bathypelagic')[0];
// var abyssopelagic = $('#abyssopelagic')[0];
// var hadopelagic = $('#hadopelagic')[0];
// var layers = $('.layer');
var page = 0;


//start of an attempt at one page scrolling
window.scrollBy(0, window.innerHeight);


//parallax scroll but choppy
$(window).on('scroll', function() {
    var val = window.scrollY % 100;
    $.each($('.des'), function(i) {
        $('.des')[i].style.transform = 'translateY(' + val * 0.3 + 'px)';
    });
});


//image functions & manipulation

///image hover
$('#sea img').hover(function() {
    $(this).css('height', '22vmin');
}, function() {
    $(this).css('height', '20vmin');
});

///image click
$('#sea img').click(function(e) {
    e.preventDefault();
    $('#cover').show(600);
    // $('#tbox').show();
    $('body').css('overflow', 'hidden');
});

///click on x to close box
$('#tbox img').click(function(e) {
    e.preventDefault();
    $('#cover').hide(600);
    // $('#tbox').hide();
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