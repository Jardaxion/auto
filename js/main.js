$(document).ready(() => {
    //Функции которые нужно включить при запуске
    firstSelectPage();

    // Адаптация
    $('.slider .container').height($('.slider').height());
    $('.auto__char-hr').each(function(){
        $(this).width($(this).parent().width() - ($(this).prev().width() + $(this).next().width()));
    })

    // Слайдеры
    // Слайдер на главном экране
    $('.slider__background').slick({
        dots: false,
        arrow: true,
        prevArrow: '.slider__leftArrow',
        nextArrow: '.slider__rightArrow',
        fade: true,
        asNavFor: '.slider__inner'
    });
    $('.slider__inner').slick({
        dots: false,
        arrow: true,
        prevArrow: '.slider__leftArrow',
        nextArrow: '.slider__rightArrow',
        fade: true,
        asNavFor: '.slider__background'
    })
    // Отзывы
    $('.reviews__content').slick({
        dots: false,
        arrow: true,
        prevArrow: '.reviews__leftArrow',
        nextArrow: '.reviews__rightArrow',
        slidesToShow: 2,
    })
    // Продукт
    //Большая
    $('.product__top-slider').slick({
        dots: false,
        prevArrow: '.product__leftArrow',
        nextArrow: '.product__rightArrow',
        fade: true,
        asNavFor: '.product__slider-bottom',
        slidesToShow: 1,
        infinite: false
    })
    //Маленькая
    $('.product__slider-bottom').slick({
        dots: false,
        asNavFor: '.product__top-slider',
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: true,
        infinite: false,
        arrows: false
    })

    //Выбор страницы в каталоге
    $('.js-select-page').on('click', function(e){
        e.preventDefault();

        selectPage($(this).data('select-page'));
    })
})

//Функции
//Выбор страницы в каталоге
//При загрузке
function firstSelectPage(){
    let data = $('.js-select-page.active').data('select-page');
    
    $('.js-page').hide();
    $('.js-page[data-page="'+data+'"]').show();
    $('.js-page[data-page="'+data+'"]').addClass('active');
}
//При нажатии
function selectPage(data){
    $('.js-page.active').hide();
    $('.js-page.active').removeClass('active');
    $('.js-select-page.active').removeClass('active');

    $('.js-select-page[data-select-page="'+data+'"]').addClass('active');
    $('.js-page[data-page="'+data+'"]').fadeIn();
    $('.js-page[data-page="'+data+'"]').addClass('active');
}