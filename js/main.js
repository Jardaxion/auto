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
        asNavFor: '.slider__inner',
        responsive: [
            {
              breakpoint: 961,
              settings: {
                arrows: false,
              }
            }
        ]
    });
    $('.slider__inner').slick({
        dots: false,
        arrow: true,
        prevArrow: '.slider__leftArrow',
        nextArrow: '.slider__rightArrow',
        fade: true,
        asNavFor: '.slider__background',
        responsive: [
            {
              breakpoint: 961,
              settings: {
                arrows: false,
              }
            }
        ]
    })
    // Отзывы
    $('.reviews__content').slick({
        dots: false,
        arrow: true,
        prevArrow: '.reviews__leftArrow',
        nextArrow: '.reviews__rightArrow',
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 961,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
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

    //Выбор города в хедер
    //Октрытие менюшки
    $('.js-select-city').on('click', (e) => {
        e.preventDefault();

        openCloseSelect();
    })
    //Выбор города
    $('.js-select-option').on('click', function(e){
        e.preventDefault();

        $(this).parent().prev().children('.header__box-link').text($(this).text());
        openCloseSelect();
    })
    //Закрытие этой выборки
    $(window).on('click', (e) => {
        if($('.js-select-city').hasClass('active') && !$('.js-select-city').hasClass('time')){
            if(e.target != document.querySelector('.js-select-box')){
                document.querySelectorAll('.js-select-box *').forEach((el) => {
                    if(e.target != el){
                        $('.js-select-city').removeClass('active');
                        $('.js-select').removeClass('active');
                    }
                })
            }
        }
    })

    //Откртыие закрытие  мобильного меню
    $('.js-open-mobMenu').on('click', function(e){
        e.preventDefault();

        $(this).toggleClass('active');
        $('.js-mobMenu').slideToggle();
        $('body').toggleClass('noScroll');
    })

    //Модальные окна
    //Открытие
    $('.js-open-modal').on('click', function(e){
        e.preventDefault();

        if($('.js-open-desktop-menu').hasClass('reverse')){
            openCloseMenu();
        }

        if($('.js-open-mobile-menu').hasClass('reverse')){
            openCloseMobMenu();
        }

        openModal($(this).data('modal'));
    })
    //Закрытие
    $('.js-close-modal').on('click', function(e){
        e.preventDefault();

        closeModal();
    })
    $('.modal').on('click', function(e){
        e.preventDefault();

        if(e.target === document.querySelector('.modal')){
            closeModal();
        }

    })
    //Переоткрытие
    $('.js-reOpen-modal').on('click', function(e){
        e.preventDefault();

        reOpenModal($(this).data('modal'));
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

//Открытие закрытие меню
function openCloseSelect(){
    $('.js-select-city').toggleClass('active');
    $('.js-select-city').toggleClass('time');
    $('.js-select').toggleClass('active');

    setTimeout(() => {
        $('.js-select-city').removeClass('time');
    }, 500);
}

//Модальные окна
//Открытие
function openModal(id){
    $('.modal#'+id).addClass('active');
    $('.modal__background').addClass('active');
    $('body').addClass('noScroll');
}

//Закрытие
function closeModal() {
    $('.modal.active').removeClass('active');
    $('.modal__background').removeClass('active');
    $('body').removeClass('noScroll');
}

//Закрытие одного модального окна и открытие другого
function reOpenModal(id) {
    $('.modal.active').removeClass('active');
    $('.modal#'+id).addClass('active');
}