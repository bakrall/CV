$(document).ready(function() {
            $('a').click(function(e) {
                e.preventDefault();
                var part = $(this).attr('href');
                var place = ($(part).offset().top) - 50;
                console.log(place);
                $('body').animate({scrollTop:place}, '500', 'swing'); 
            });
        });
 