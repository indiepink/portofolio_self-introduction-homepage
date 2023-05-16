window.addEventListener("load", function () {
    const $first_btn = document.querySelectorAll(".first_btn");
    const $back_btn = document.querySelector("#back_btn");
    const $lens_filter2 = document.querySelector("#lens_filter2");
    const $lens_filter1 = document.querySelector("#lens_filter1");

    const $videoElem = document.querySelector('#nikonVideo');
    let progress_ratio;

    function init() {
        document.body.classList.remove('before-load');

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        progress_ratio = scrollTop / scrollHeight;
        if (progress_ratio < 0) progress_ratio = 0;
        if (progress_ratio > 1) progress_ratio = 1;

        $videoElem.currentTime = $videoElem.duration * progress_ratio;

        window.addEventListener('scroll', function (e) {
            e.preventDefault();
            progress_ratio = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
            console.log(window.pageYOffset);
            console.log(progress_ratio);
            if (progress_ratio < 0) progress_ratio = 0;
            if (progress_ratio > 1) progress_ratio = 1;

            $videoElem.currentTime = $videoElem.duration * progress_ratio;
        });
    }

    init();

    $first_btn.forEach(element => {
        element.addEventListener("click", function (e) {
            e.preventDefault();
            $lens_filter1.style.display = "none";
            $lens_filter2.style.display = "flex";

            element.classList.add("check_btn");
        });
    });

    $back_btn.addEventListener("click", function (e) {
        e.preventDefault();
        $lens_filter1.style.display = "flex";
        $lens_filter2.style.display = "none";

        $first_btn.forEach((element) => {
            element.classList.remove("check_btn");
        });
    });

    function toogleButton(buttonId){
        var button = document.querySelector(buttonId);
        button.classList.toggle('check_btn');
        
        // 다른 HTML 페이지로 현재 버튼의 상태를 전달합니다.
        localStorage.setItem(buttonId,button.classList.contains('check_btn'));
    }

    // function syncBuutonState() {
    //     var $second_btn1 = document.querySelector("#second_btn1");
    //     var $second_btn2 = document.querySelector("#second_btn2");
    //     var $second_btn3 = document.querySelector("#second_btn3");
    //     var $second_btn4 = document.querySelector("#second_btn4");
    //     var $second_btn5 = document.querySelector("#second_btn5");
    //     var $second_btn6 = document.querySelector("#second_btn6");   
   
    //     // 다른 HTML 페이지로 현재 버튼의 상태를 전달합니다.
    //     localStorage.setItem('$second_btn1',$second_btn1);
    //     localStorage.setItem('$second_btn2',$second_btn2);
    //     localStorage.setItem('$second_btn3',$second_btn3);
    //     localStorage.setItem('$second_btn4',$second_btn4);
    //     localStorage.setItem('$second_btn5',$second_btn5);
    //     localStorage.setItem('$second_btn6',$second_btn6);
    // }

    // function updateSecondButtonStates() {
    //     var $second_btn1 = document.querySelector("#second_btn1");
    //     var $second_btn2 = document.querySelector("#second_btn2");
    //     var $second_btn3 = document.querySelector("#second_btn3");
    //     var $second_btn4 = document.querySelector("#second_btn4");
    //     var $second_btn5 = document.querySelector("#second_btn5");
    //     var $second_btn6 = document.querySelector("#second_btn6");   
    // }


});