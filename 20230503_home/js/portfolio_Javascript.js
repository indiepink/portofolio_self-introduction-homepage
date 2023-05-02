window.addEventListener("load", function () {
    const $clicked = document.querySelector("#clicked");
    const $content1 = document.querySelector("#content1");
    const $content2 = document.querySelector("#content2");
    const $container = document.querySelector("#container");
    const $interiamain = document.querySelector("#interia_main");
    const $interiadetail = document.querySelector("#interia_detail");
    const $portBox = document.querySelector("#portBox");

    const $porimg = document.querySelectorAll(".porimg");

    // 일정 스크롤을 내려야 click 버튼이 나오게 한다.
    function clickbtn_appear() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (!($clicked.classList.contains("click")) && scrollTop > 800)
            $clicked.style.display = "block";
        // else if ($clicked.classList.contains("click") && scrollTop < 700) {
        //     $clicked.style.display = "block";
        // }
        else
            $clicked.style.display = "none";

    }

    // click 버튼이 클릭이 된 상태이고, 내가 올린 스크롤이 700px 이하 이면
    // click 버튼을 누르기 전으로 돌아가기
    function clicked_condition() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scrollTop);
        if ($clicked.classList.contains("click") && scrollTop < 700) {
            $porimg.forEach((element) => {
                element.style.transform = "none";
                element.style.filter = "grayscale(100%)";
                element.addEventListener('mouseenter', function() {
                    element.style.filter = "grayscale(0)";
                    element.style.transform = "scale(1.1)";
                });
                element.addEventListener('mouseleave', function() {
                    element.style.filter = "grayscale(100%)";
                    element.style.transform = "none";
                });
            });
        
            $clicked.classList.remove("click");
            $container.style.height = '1800px';
            $content2.style.display = "none";
            $clicked.style.display = "block";
            $portBox.style.backgroundColor = "rgb(232, 215, 208)";

        }
    }

    window.addEventListener('scroll', (e) => {
        e.preventDefault();

        requestAnimationFrame(moveImage($interiadetail, 500));
        requestAnimationFrame(moveImage($interiamain, -500));

        clickbtn_appear();
        clicked_condition();

    });

    // 앱 스크롤 시 펼쳐지게 하기
    function moveImage($element, distance) {
        return function () {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            // scrollFraction은 스크롤이 어느 위치에 있는지 계산, 0-1사이의 값
            // 0이면 최상단, 1이면 최하단을 의미
            const scrollFraction = scrollTop / scrollHeight;
            const leftPosition = 460 + (scrollFraction * distance);
            $element.style.left = `${leftPosition}px`;
        }
    }

    // click 버튼 클릭시
    $clicked.addEventListener("click", function (e) {
        let length = $porimg.length;
        e.preventDefault();

        $container.style.height = '3800px';
        // $content1.style.height = '3800px';
        $content2.style.display = "block";
        $portBox.style.backgroundColor = " transparent";

        // $porimg의 hover 삭제
        for (let i = 0; i < length; i++) {
            $porimg[i].style.transform = "none";
            $porimg[i].style.filter = "grayscale(0)";
        }

        // click시 이미지 이동
        $porimg.forEach((element, index) => {
            switch (index) {
                case 0:
                    element.style.transform = "rotate(85deg) translate3d(-70px, 230px, 0px)";
                    break;
                case 1:
                    element.style.transform = "rotate(-115deg) translate3d(-105px, 180px, 0px)";
                    break;
                case 2:
                    element.style.transform = "rotate(55deg) translate3d(-120px, 130px, 0px)";
                    break;
                case 3:
                    element.style.transform = "rotate(-35deg) translate3d(56px, 100px, 0px)";
                    break;
                default:
                    break;
            }
        });

        // 클릭 버튼 사라지기
        $clicked.style.display = "none";

        $clicked.classList.add("click");
    });




});