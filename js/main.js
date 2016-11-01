$(document).ready(function () {

    var window_width = $(window).width();
    var window_height = $(window).height();
    var scroll_top;

    //висота першого вікна
    if(window_height < 700){
        $('#section-1').css('height', 700 + 'px');
    }else{
        $('#section-1').css('height', window_height);
    }

    //фіксація меню
    function fixed_menu(){
        scroll_top = $(window).scrollTop();
        window_width = $(window).width();
        if(scroll_top >= 35 || window_width < 768){
            $('header').css({
                'position':'fixed',
                'background':'rgb(0, 0, 0)',
                'margin-top':'0',
                'padding':'20px 0 15px',
                'border-bottom':'1px solid #fed136'
            })
        }else{
            $('header').css({
                'position':'absolute',
                'background':'none',
                'margin-top':'50px',
                'padding':'0',
                'border-bottom':'none'
            })
        }
    }

    //закриття меню при кліці на пункт меню в мобільній версії
    function collapse_menu () {
        window_width = $(window).width();
        if(window_width < 768){
            $('.menu ul li a').click(function () {
                $('.navbar-toggle').click();
            })
        }else{
            $('.menu ul li a').off('click');
        }
    }

    fixed_menu();
    collapse_menu();

    $(window).on('scroll', function () { //виклик функцій при скролінгу
        fixed_menu();
        parallax_main_img();

    });
    $(window).resize(function () { //виклик функцій при зміні ширини вікна
        fixed_menu();
        collapse_menu();
    });

    //плавна прокрутка до якоря
    $(function($){
        $(document).on('click', 'a[href^=#]', function () {
            $('html, body').animate({ scrollTop:  $('a[id="'+this.hash.slice(1)+'"]').offset().top }, 1000 );
            return false;
        });
    });

    //паралакс ефект для головного зображення
    function parallax_main_img () {
        if($('#section-1').innerHeight() > scroll_top){
            var offset_main_img = scroll_top / 10;
            $('.main-img').css('margin-top', -offset_main_img);
        }
    }


    //ініціалізація WOW плагіна
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       200,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();


    //анімація для for-ico img в SECTION-2
    $('.for-ico img').hover(function () {
        $(this).addClass('pulse').addClass('animated');
    }, function () {
        $(this).removeClass('pulse').remove('animated');
    });




    $(function(){

        // Instantiate MixItUp:

        $('#Container').mixItUp();

    });

    $(".filter").click(function(){
        var filter_class = $(this).data('filter');
        if(filter_class == 'all'){
            $('.portfolio-image a').addClass('cboxElement');
        }else{
            $('.portfolio-image a').removeClass('cboxElement');
            $(filter_class).find('a').addClass('cboxElement');
        }
    });


        $('.cat-1').on('click', function () {
            $('#filter-category-3').click();
        });
        $('.cat-2').on('click', function () {
            $('#filter-category-2').click();
        });
        $('.cat-3').on('click', function () {
            $('#filter-category-4').click();
        });
        $('.cat-4').on('click', function () {
            $('#filter-category-1').click();
        })

});

$("#contact-us").submit(function() {
    var form_data = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: form_data,
        success: function() {
            alert("Ваше повідомлення успішно надіслано");
        }
    });
});

