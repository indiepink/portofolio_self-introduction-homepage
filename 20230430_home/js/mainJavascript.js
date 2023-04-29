window.addEventListener("load", function () {

    const emphasis = document.querySelectorAll('.emphasis');
    const $article1 = document.querySelector('#article1');
    const $article2 = document.querySelector('#article2');
    let currentPosition = 0;
    let currentPosition2 = 0;
    let isMoving = false; // 이동 중 여부
    let isMoving2 = false; // 이동 중 여부


    // 글자 나오기
    for (let i = 0; i < emphasis.length; i++) {
        window.setTimeout(function () {
            emphasis[i].style.transitionDuration = '1s';
            emphasis[i].style.opacity = "1";
        }, 1000);
    }

    window.addEventListener('scroll', function (event) {
        event.preventDefault();

        const scrollPosition = window.pageYOffset;      // 얼마나 내려갔는지 확인 
        const threshold = 100;                          // 임계값 설정
        const delta = window.scrollY - currentPosition;
        currentPosition = window.scrollY;

        // 스크롤 위치가 임계값에 도달하면 이동 중지
        if (scrollPosition > threshold && !isMoving) {
            $article1.style.transform = `translateX(${parseInt(getComputedStyle($article1).transform.split(',')[4]) - delta}px)`;
            isMoving = true;
        }
        else if (currentPosition < 600 && isMoving) {
            $article1.style.transform = `translateX(${parseInt(getComputedStyle($article1).transform.split(',')[4]) - delta}px)`;
            isMoving = false;
        }

    });


    window.addEventListener('scroll', function (event) {
        event.preventDefault();

        const scrollPosition = window.pageYOffset;      // 얼마나 내려갔는지 확인 
        const threshold = 500;                          // 임계값 설정
        const delta = window.scrollY - currentPosition2;
        currentPosition2 = window.scrollY;

        console.log("window.scrollY :", window.scrollY, "currentPosition", currentPosition, "delta", delta);
        // 스크롤 위치가 임계값에 도달하면 이동 중지
        if (scrollPosition > threshold && !isMoving2) {
            $article2.style.transform = `translateX(${parseInt(getComputedStyle($article2).transform.split(',')[4]) + delta}px)`;
            isMoving2 = true;
        }
        else if (currentPosition2 < 800 && isMoving2) {
            $article2.style.transform = `translateX(${parseInt(getComputedStyle($article2).transform.split(',')[4]) + delta}px)`;
            isMoving2 = false;
        }
    });
});



