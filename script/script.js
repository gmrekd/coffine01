$(function(){

    //메뉴
    $(".sub").hide()
    
    $(".gnb").mouseenter(function(){

        $(".sub").stop().slideDown()
        $(".header_b").stop().animate({height : "400px"}, 500)
        
    })//(".gub").mouseenter
    
    $(".gnb").mouseleave(function(){
        
        $(".sub").stop().slideUp()
        $(".header_b").stop().animate({height : "103px"}, 500)

    })//(".gub").mouseleave

    //이미지 슬라이드
    $(".move").slick({

        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true

    })//(".move").slick

    //section4 이미지 슬라이드
    $(".left_move").slick({

        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,

    })//(".left_move").slick


})//jq