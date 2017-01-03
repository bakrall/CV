$(document).ready(function() {

    var headerHeight, part, place;

    function getOffsets() {
        headerHeight = $('#navbarTop').height(); 
    }

    $(window).load(getOffsets).resize(getOffsets);

    $(function () {
        $('.headerAnchor').click(function () {
            part = $(this).attr('href');
            place = $(part).offset().top - headerHeight;
        
            $('html, body').animate({
                scrollTop: place
            }, 'slow');
            
            return false;
        });
    });
    
    if ($(window).width() < 768 || $(window).resize()) {
        $('.headerAnchor').on('click', function(event) {
            $('#menuMobile').toggleClass('in');
        });
    }
 });