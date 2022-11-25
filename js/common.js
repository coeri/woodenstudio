$(function () {
    //AOS.js
    AOS.init();

    //Vegas.js
    $(".main-visual").vegas({
        //タイマー表示なし
        timer: false,
        //スライドの入り方
        transition: 'slideRight',
        //
        transitionDuration: 2000,
        delay: 10000,
        //アニメーションの種類
        animation: 'kenburns',
        animationDuration: 10000,

        slides: [
            { src: "./img/photo01.jpg" },
            { src: "./img/photo011.jpg" },
            { src: "./img/photo012.jpg" },
        ]
    });

    $(document).ready(function() {
        $('.drawer').drawer();
      })

});