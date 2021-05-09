$(document).ready(function() {
    $('.header__burger, .menu-close').click(function(event) {
        $('.mobile-menu, .mobile__menu-wrapper').toggleClass('_active');
        $('body').toggleClass('lock');
        console.log('dssd');
    });

    const da = new DynamicAdapt("max");
    da.init();
});