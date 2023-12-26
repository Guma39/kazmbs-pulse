$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
    })

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })

    $('.catalog-item__back').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })

    $('[data-modal=consultation]').on('click', function () {
        $(".overlay").removeClass('overlay_none')
        $(".overlay #consultation").addClass('modal_show')
    })

    $('.modal__close').on('click', function () {
        $(".overlay").addClass('overlay_none')
        $(".overlay #consultation").removeClass('modal_show')
        $(".overlay #order").removeClass('modal_show')
        $(".overlay #thanks").removeClass('modal_show')
    })

    $('.button_mini').each(function (index) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(index).text())

            $(".overlay").removeClass('overlay_none')
            $(".overlay #order").addClass('modal_show')
        })
    })

    $('input[name=phone]').mask("+7(999) 999-9999");

    function validateForm(formName) {
        $(formName).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                }
            },

            messages: {
                name: {
                    required: "Атыңызды толтырыңыз",
                    minlength: jQuery.validator.format("Кем дегенде {0} символ болуы керек")
                },
                email: {
                    required: "Почтаңызды толтырыңыз",
                    email: "Почтаңызды дурыс толтырыңыз"
                },
                phone: "Номиринизди енгизиниз"
            }
        });
    }

    validateForm('#consultation-form')
    validateForm('#consultation form')
    validateForm('#order form')
})









// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
//     })

//     $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
//         $(this)
//             .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
//             .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
//     });

//     $('.catalog-item__link').each(function (i) {
//         $(this).on('click', function (e) {
//             e.preventDefault();
//             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//         })
//     })

//     $('.catalog-item__back').each(function (i) {
//         $(this).on('click', function (e) {
//             e.preventDefault();
//             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//         })
//     })

//     $('[data-modal=consultation]').on('click', function () {
//         $(".overlay").removeClass('overlay_none')
//         $(".overlay #consultation").addClass('modal_show')
//     })



   
// //     $('[data-modal=consultation]').on('click', function () {
// //         $(".overlay").removeClass('overlay_none')
// //         $(".overlay #consultation").addClass('modal_show')
// //     })


//     // $('#consultation_btn').on('click', function () {
//     //     $(".overlay").removeClass('overlay_none')
//     // })
//     // $('#modal-close-btn').on('click', function () {
//     //     $(".overlay").addClass('overlay_none')
//     // })

//     // $('#modal-close-btn').each(function (i) {
//     //     $(this).on('click', function () {
//     //         $(".overlay").addClass('overlay_none')
//     //     })
//     // })
// })