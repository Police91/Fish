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
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        centerMode: true,
        prevArrow: '<button type="button" class="product-prev"><img src="./images/product-prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="product-next"><img src="./images/product-next.svg" alt="next"></button>'
    });
    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false,
    });
});