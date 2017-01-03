$(document).ready(function() {

    var headerHeight, part, place;

    function getOffsets() {
        headerHeight = $('#navbarTop').height(); 
        menuMobileHeight = $('#menuMobile').height() + 50;
    }

    $(window).load(getOffsets).resize(getOffsets);

    $(function () {
        $('.headerAnchor').click(function () {
            part = $(this).attr('href');
            place = $(part).offset().top - headerHeight;

            if ($(window).width() >= 768) {
            $('html, body').animate({
                scrollTop: place
            }, 'slow');
            return false;
        });
    });
    
    if ($(window).width() < 768 || $(window).resize()) {
        });
    }
 });