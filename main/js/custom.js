$(document).ready(function () {

    const pos1 = $('#s1').offset().top;
    const pos2 = $('#s2').offset().top;
    const pos3 = $('#s3').offset().top;
    const pos4 = $('#s4').offset().top;
    const pos5 = $('#s5').offset().top;

    // const menu_t = $('.menu').offset().top;

    // console.log(menu_t);

    $(window).on('scroll', function () {
        let scroll = $(this).scrollTop();
        // console.log(scroll);

        $('#navi>li>a').removeClass('on');

        if (scroll >= pos1 && scroll < pos2) {
            $('#navi>li').eq(0).children('a').addClass('on');

            // $('.menu').removeClass('on');
        }
        if (scroll >= pos2 && scroll < pos3) {
            $('#navi>li').eq(1).children('a').addClass('on');

            $('section').eq(2).removeClass('on');

            // $('.menu').addClass('on');
        }
        if (scroll >= pos3 && scroll < pos4) {
            $('#navi>li').eq(2).children('a').addClass('on');

            $('section').eq(2).addClass('on');
            $('section').eq(3).removeClass('on');

            // $('.menu').removeClass('on');
        }
        if (scroll >= pos4 && scroll < pos5) {
            $('#navi>li').eq(3).children('a').addClass('on');

            $('section').eq(3).addClass('on');
            $('section').eq(2).removeClass('on');
            $('section').eq(4).removeClass('on');

            // $('.menu').addClass('on');
        }
        if (scroll >= pos5) {
            $('#navi>li').eq(4).children('a').addClass('on');

            $('section').eq(4).addClass('on');
            $('section').eq(3).removeClass('on');

            // $('.menu').removeClass('on');
            $('.s5_box_inner').addClass('on');
            $('.s5_box').addClass('on');
        }

        $('.box span:nth-child(odd)').css('transform', 'translateX(' + scroll + 'px' + ')');
        $('.box span:nth-child(2n)').css('transform', 'translateX(' + '-' + scroll + 'px' + ')');
        // $('.title1').animate({transform:'translateX(50px)'});

        // if($('.menu').offset().top >= $('section:nth-child(2n)').offset().top){
        //     $('.menu > span').css({'background':'#fff'});
        // }else{
        //     $('.menu > span').css({'background':'#000'});
        // }
    });

    //???????????? ????????? ???????????? ??????????????? ??????????????? ?????? ?????????
    $('#navi>li>a').on('click', function (e) {
        e.preventDefault();

        var target = $(this).attr('href');
        var target_pos = $(target).offset().top;

        $('html,body').stop().animate({
            'scrollTop': target_pos
        }, 1000);
    });

    // ?????? ????????? ???(section2)?????? ??????
    $('.heart').on('click', function () {
        $('html,body').stop().animate({
            'scrollTop': pos2
        }, 600);
    })

    // ????????? mouseover??? ?????????

    $('.img_box').on('mouseover', function () {
        $('.cer').addClass('on');
        $('.edu').addClass('on');
    })

    // ????????? ?????? ????????? ????????? ????????? ??????

    $('.hamburger').on('click',function(){
        $('.m-menu').toggleClass('on');
    })
 



})