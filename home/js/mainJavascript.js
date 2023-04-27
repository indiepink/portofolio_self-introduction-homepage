window.addEventListener("load", function () {

    const emphasis = document.querySelectorAll('.emphasis');
    const $patienceImg = document.querySelector("#patience_img");
    const $patienceArticle = document.querySelector("#patience_article");

    // let i =0;

    // 글자 나오기
    for (let i = 0; i < emphasis.length; i++) {
        window.setTimeout(function () {
            emphasis[i].style.transitionDuration = '1s';
            emphasis[i].style.opacity = "1";
        }, 1000);
    }

    // window.addEventListener('scroll', function () { 
    //    console.log( window.pageYOffset); 
    //    patienceImg.style.marginLeft = (680-20*i) + "px";
    //    patienceArticle.style.marginLeft = (680-80*i) + "px";
    //    i++;
    // });
});

// $(function () {
//     $(window).scroll(function () {
//         let st = $(this).scrollTop();
//         console.log(st);

//         if (st > 100) {
//             $('#article1').stop().animate({ marginLeft: 300 });
//         } else {
//             $('#article1').stop().animate({ marginLeft: 680 });
//         }
//     });
// });

// $(function () {
//     $(body).on("mousewheel",function (event, delta) {
//         if (delta > 0) {
//             $(this).css({ "background": "red" });;
//         } else if (delta < 0) {
//             $(this).css({ "background": "blue" });
//         }
//     });
// });

// $(function () {
//     const $article1 = document.querySelector('#article1');

//     $("div").on("mousewheel", (event) => {
//         var delta = event.deltaY;
//         console.log(delta);
//         if (delta > 0) {
//             $article1.stop().animate({ marginLeft: "300px" }, 300);
//         } else if (delta < 0) {
//             $article1.stop().animate({ marginLeft: "680px" }, 680);
//         }
//     });
// });

$(function () {
    const $article1 = document.querySelector('#article1');

    $("div").on("mousewheel", (event) => {
        let direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
  
        // 방향과 현 스크롤 위치
        console.log(direction, window.scrollY);
    });
});

