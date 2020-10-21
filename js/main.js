$(function(){

    $('.slider__main-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
    });

    $('#example__1, #example__2, #example__3').barrating({
        theme: 'css-stars'
    });

    $('.header__menu-mobile').on('click', function() {
        $('.header__menu-mobile').toggleClass('header__menu-mobile--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.menu__list-link').on('click', function() {
        $('.header__menu-mobile').removeClass('header__menu-mobile--active');
        $('.menu__list').removeClass('menu__list--active');
    });
});