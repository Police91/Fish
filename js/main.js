$(function(){
    $('.header__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./images/prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./images/next.svg" alt="next"></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });

    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true
    });
    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true
    });
});