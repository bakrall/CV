$(document).ready(function() {

    var headerHeight, part, place;

    function getOffsets() {
        headerHeight = $('#jeden').height(); 
        
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
 });