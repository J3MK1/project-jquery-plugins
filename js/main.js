$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay: true,
        dots: true,
    });

    $('#slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    })

    $('.hamburguer-menu').click(function() {
        $('nav').slideToggle();
    });
    
    $('#tel').mask('(000) 0000-0000', {
        placeholder: '(DDD) 1234-5678'
    })

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            }
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(event, validate) {
            let fieldInvalid = validate.numberOfInvalids();
            console.log(fieldInvalid);
        }
    })

    $('.game-list button').click(function(){
        const onClick = $('#contact');
        const gameName = $(this).parent().find('p').text();

        $('#game').val(gameName);

        $('html').animate({
            scrollTop: onClick.offset().top
        }, 1000)
    })


})
