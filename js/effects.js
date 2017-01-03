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
            placeMobile = $(part).offset().top - menuMobileHeight;

            if ($(window).width() >= 768) {
            $('html, body').animate({
                scrollTop: place
            }, 'slow');
           }   

            if ($(window).width() < 768) { 
                $('html, body').animate({
                    scrollTop: placeMobile
                }, 'slow');
            }

            return false;
        });
    });
    
    if ($(window).width() < 768 || $(window).resize()) {
        $('button').on('click', function(event) {
            if($('#menuMobile').hasClass('in') == true) {
                $('#data').animate({
                    'margin-top': '0'
                }, 300);
            } else {
                $('#data').animate({ 
                    'margin-top': '400px'
                }, 450);
            }
        });
    }
 });