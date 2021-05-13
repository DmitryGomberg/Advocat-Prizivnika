$(document).ready(function() {
    $('.header__burger, .menu-close').click(function(event) {
        $('.mobile-menu, .mobile__menu-wrapper').toggleClass('_active');
        $('body').toggleClass('lock');
        console.log('dssd');
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }
    });
    const da = new DynamicAdapt("max");
    da.init();
});