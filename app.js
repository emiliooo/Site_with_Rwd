$(document).ready(function() {

    function setMenu() {
        $(window).on('resize', function() {
            if ($(window).width() <640) {
                $('.nav').hide();
                $('.menuBtn').show();

            } else {
                $('.nav').show();
                $('.menuBtn').hide();
                $('.mobileMenu').hide();

            }
        });
    }

    function setClick() {
        $('.menuBtn').on('click', function() {
            $('.mobileMenu').toggle();
        });
    }

    setMenu();
    setClick();

});