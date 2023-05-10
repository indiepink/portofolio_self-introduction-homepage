window.addEventListener("load", function () {
    const $clicked = document.querySelector("#clicked");
    const $content1 = document.querySelector("#content1");
    const $content2 = document.querySelector("#content2");
    const $container = document.querySelector("#container");
    const $interiamain = document.querySelector("#interia_main");
    const $interiadetail = document.querySelector("#interia_detail");
    const $portBox = document.querySelector("#portBox");
    const $omse = document.querySelector("#omse");
    const $down = document.querySelector("#down");
    const $slides = document.querySelector('#slides');
    const $explan2 = document.querySelector('#explan2');
    const $rock = document.querySelector('#rock');
    const $grape = document.querySelector('#grapes');
    const $tamagotchi = document.querySelector('#tamagotchi');
    const $indicator = document.querySelector("#indicator");

    const $slider = document.querySelector('#slider');
    // const $slidesCh = document.querySelector('#slides >li');

    const $porimg = document.querySelectorAll(".porimg");

    // var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    // var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    var maxScrollHeight = $slides.scrollWidth - $slides.clientWidth;

    // 마우스가 들어갈 때 발생하는 이벤트 함수
    function mouseenterListener(e) {
        e.preventDefault();
        const img = e.target;
        img.style.filter = "grayscale(0)";
        img.style.transform = "scale(1.1)";
        img.style.transitionDuration = "0.5s";
    }

    // 마우스가 나올 때 발생하는 이벤트 함수
    function mouseleaveListener(e) {
        e.preventDefault();
        const img = e.target;
        img.style.filter = "grayscale(100%)";
        img.style.transform = "none";
        img.style.transitionDuration = "0.5s";
    }

    // 마우스 호버 기능을 함
    $porimg.forEach((element) => {
        element.addEventListener('mouseenter', mouseenterListener);
        element.addEventListener('mouseleave', mouseleaveListener);
    });

    // 일정 스크롤을 내려야 click 버튼이 나오게 한다.
    function clickbtn_appear() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (!($clicked.classList.contains("click")) && scrollTop > 800)
            $clicked.style.display = "block";
        else
            $clicked.style.display = "none";
    }


    // click 버튼이 클릭이 된 상태이고, 내가 올린 스크롤이 700px 이하 이면
    // click 버튼을 누르기 전으로 돌아가기
    function clicked_condition() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // console.log(scrollTop);

        if ($clicked.classList.contains("click") && scrollTop < 700) {
            $porimg.forEach((element) => {
                element.style.transform = "none";
                element.style.filter = "grayscale(100%)";
            });

            $clicked.classList.remove("click");
            $container.style.height = '1800px';
            $content2.style.display = "none";
            $clicked.style.display = "block";
            $portBox.style.backgroundColor = "rgb(232, 215, 208)";
            $down.style.display = "none";
        }

        // 이미지의 transform이 없을 때 마우스 호버 기능이 다시 생겨난다.
        if ($omse.style.transform == "none") {
            $porimg.forEach((element) => {
                element.addEventListener('mouseenter', mouseenterListener);
                element.addEventListener('mouseleave', mouseleaveListener);
            });
        }
    }

    // click 버튼 클릭시
    $clicked.addEventListener("click", function (e) {
        e.preventDefault();

        $container.style.height = '3900px';
        // $content1.style.height = '3800px';
        $content2.style.display = "block";
        $portBox.style.backgroundColor = " transparent";

        $porimg.forEach((element) => {
            element.removeEventListener('mouseenter', mouseenterListener);
            element.removeEventListener('mouseleave', mouseleaveListener);
        });

        // click시 이미지 이동
        $porimg.forEach((element, index) => {
            element.style.transitionDuration = "0.6s";
            switch (index) {
                case 0:
                    element.style.transform = "rotate(85deg) translate3d(-70px, 230px, 0px)";
                    // element.style.transitionDuration = "0.6s";
                    break;
                case 1:
                    element.style.transform = "rotate(-115deg) translate3d(-105px, 180px, 0px)";
                    // element.style.transitionDuration = "0.6s";
                    break;
                case 2:
                    element.style.transform = "rotate(55deg) translate3d(-90px, 180px, 0px)";
                    // element.style.transitionDuration = "0.6s";
                    break;
                case 3:
                    element.style.transform = "rotate(-45deg) translate3d(57px, 140px, 0px)";
                    // element.style.transitionDuration = "0.6s";
                    break;
                default:
                    break;
            }
        });

        // 클릭 버튼 사라지기
        $clicked.style.display = "none";
        $down.style.display = "block";

        $clicked.classList.add("click");
    });

    // 스크롤
    window.addEventListener('scroll', (e) => {
        e.preventDefault();

        requestAnimationFrame(moveImage($interiadetail, 500));
        requestAnimationFrame(moveImage($interiamain, -500));

        // $slides.style.marginLeft =`${-500*i}px`;

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

    $explan2.addEventListener('wheel', function (e) {
        e.preventDefault();
        console.log(e.deltaY);
        if (e.deltaY > 0) {
            $slides.scrollBy({ left: 90, top: 0, behavior: "smooth" });
            // $rock.style.display = "none";
            // $grape.style.display = " block";

        }
        else {
            $slides.scrollBy({ left: -90, top: 0, behavior: "smooth" });
            // $rock.style.display ="none";
            // $grape.style.display = "block";  
        }

    });

    $slider.addEventListener('wheel', function (e) {
        e.preventDefault();
        console.log(e.deltaY);

        if (e.deltaY > 0) {
            $slides.scrollBy({ left: 90, top: 0, behavior: "smooth" });
        }

        else {
            $slides.scrollBy({ left: -90, top: 0, behavior: "smooth" });
        }

    });

    // 스크롤 인디케이터의 너비 설정
    $slides.addEventListener('scroll', (e) => {
        e.preventDefault();
        let percent = $slides.scrollLeft / maxScrollHeight * 100;

        setIndicator(percent);
        showTextView(percent);
    });

    // 스크롤 인디케이터의 너비 설정
    function setIndicator(percent) {
        $indicator.style.width = `${percent}%`;
    }

    function showTextView(percent) {
        if (percent < 33.33) {
            $rock.style.display = "block";
            $grape.style.display = "none";
            $tamagotchi.style.display = "none";
        } else if (percent < 66.66) {
            $rock.style.display = "none";
            $grape.style.display = "block";
            $tamagotchi.style.display = "none";
        } else {
            $rock.style.display = "none";
            $grape.style.display = "none";
            $tamagotchi.style.display = "block";
        }
    }

});
