window.addEventListener("load", function () {
    // 글자 나오기
    const emphasis = document.querySelectorAll(".emphasis");
    const timer = document.querySelector("#hourglass");

    for (let i = 0; i < emphasis.length; i++) {
        window.setTimeout(function () {
            emphasis[i].style.transitionDuration = '1s';
            emphasis[i].style.opacity = "1";
        }, 1000);
    }


    // 모래시계 움직이기
    hourglass.addEventListener('mouseenter', (e) => {
        e.preventDefault();
        // hourglass.classList.add('move'); //.png 회전하는 방법
        hourglass.src = "./img/new모래시계.gif";
    });

    hourglass.addEventListener('mouseleave', (e) => {
        e.preventDefault();
        // hourglass.classList.remove('move'); // .png 회전 제거
        hourglass.src = "./img/모래시계.png";
    });

    $(window).scroll(function () {
        console.log($(window).scrollTop());
    });

});
