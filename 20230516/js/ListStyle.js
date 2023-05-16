window.addEventListener("load", function () {
    const $top_btn = document.querySelectorAll(".top_btn");
    // const $firstItems = document.querySelectorAll("#first_filter > li");
    // const $first_filter = document.querySelector("#first_filter");
    const $spectacleLens_btn = document.querySelector(".spectacle_lens");
    const $sunglasses_btn = document.querySelector(".sunglasses");
    const $sunglasses_list = document.querySelector("#sunglasses_list");
    const $sunglasses_list_ch = document.querySelectorAll("#sunglasses_list> li");
    const $img_list = document.querySelector("#img_list");
    const $img_list_ch = document.querySelectorAll("#img_list > li");
    const $second_filter = document.querySelector("#second_filter");
    const $spectacle_lens_list = document.querySelector("#spectacle-lens_list");
    const $spectacle_lens_list_ch = document.querySelectorAll("#spectacle-lens_list > li ");
    const $spectacle_lens = document.querySelectorAll(".spectacle-lens");
    const $second_filter_ch = document.querySelectorAll("#second_filter > li > button");
    const $second_sunglass_filter = document.querySelector("#second_sunglass_filter");
    const $second_sunglass_filter_ch = document.querySelectorAll("#second_sunglass_filter > li > button");
    const $third_filter = document.querySelector("#third_filter");
    const $third_filter_ch = document.querySelectorAll("#third_filter > li >button");
    const $repeat_btn = document.querySelector("#repeat_btn");
    const $lensStyle_btn = document.querySelector(".lensStyle");
    const $sun_lens1 = document.querySelector(".sun_lens1");
    const $sun_lens2 = document.querySelector(".sun_lens2");
    const $sun_lens1_list = document.querySelector(".sun_lens1_list");
    const $sun_lens2_list = document.querySelectorAll(".sun_lens2_list");
    const $reset_btn = document.querySelectorAll(".reset_btn");
    const $popularity_btn = document.querySelector("#popularity");
    const $newest_btn = document.querySelector("#newest");
    let $count = document.querySelector("#count");
    var is_clicked = false;

    // 인기순 순서 직접 지정
    // var popularity_order2 = [4, 2, 9, 3, 10, 7, 1, 5, 6, 8];

    // 최신순 순서 직접 지정
    // var newest_order2 = [8, 6, 1, 3, 4, 10, 7, 5, 2, 9];

    // 렌즈 종류 개수 지정
    $count.innerHTML = $img_list_ch.length;

    // li 요소들을 배열로 반환
    var imgArray = Array.from($img_list_ch);
    var sunArray = Array.from($sunglasses_list_ch);
    var lensArray = Array.from($spectacle_lens_list_ch);

    // 순서를 나타내는 배열을 생성
    var img_popularity_order = [];
    var img_newest_order = [];
    var sun_popularity_order = [];
    var sun_newest_order = [];
    var lens_popularity_order = [];
    var lens_newest_order = [];

    // 순서를 랜덤하게 섞는다.
    function MixSort() {
        return 0.5 - Math.random();
    }

    function randomliArray(arr, $arr_parent, popularity_order, newest_order) {
        // 1 부터 li 요소의 개수까지의 숫자르 랜덤하게 생성하여 배열을 추가한다.
        for (let i = 1; i <= arr.length; i++) {
            popularity_order.push(i);
            newest_order.push(i);
        }

        popularity_order.sort(MixSort);
        newest_order.sort(MixSort);

        // 인기순 버튼을 클릭 시 새로운 배열의 순서대로 li를 배치한다.
        $popularity_btn.addEventListener("click", function () {
            popularity_order.forEach(function (index) {
                $arr_parent.appendChild(arr[index - 1]);
            });
        });

        // 최신순 버튼을 클릭 시 새로운 배열의 순서대로 li를 배치한다.
        $newest_btn.addEventListener("click", function () {
            newest_order.forEach(function (index) {
                $arr_parent.appendChild(arr[index - 1]);
            });
        });
    }

    randomliArray(imgArray, $img_list, img_popularity_order, img_newest_order);
    randomliArray(sunArray, $sunglasses_list, sun_popularity_order, sun_newest_order);
    randomliArray(lensArray, $spectacle_lens_list, lens_popularity_order, lens_newest_order);


    // -----------------------------------------------------------------------------------
    function Reset() {
        // 펼쳐져 있던 버튼을 접을 때 버튼 색 초기화
        for (let j = 0; j < $second_sunglass_filter_ch.length; j++) {
            if ($second_sunglass_filter_ch[j].classList.contains('check_btn'))
                $second_sunglass_filter_ch[j].classList.remove('check_btn');
        }

        for (let j = 0; j < $second_filter_ch.length; j++) {
            if ($second_filter_ch[j].classList.contains('check_btn'))
                $second_filter_ch[j].classList.remove('check_btn');
        }
    }
    // ------------------------------------------------------------------------------

    // 안경렌즈 버튼 클릭 시 두번 째 줄 버튼 나오게 하기
    // 만약 선글라스 버튼이 클릭이 되어있으면 없애기 
    $spectacleLens_btn.addEventListener("click", function (e) {
        e.preventDefault();
        const isButtonActive = this.classList.contains('check_btn');

        if (!isButtonActive) {
            this.classList.add('check_btn');
            $second_filter.style.display = "flex";

            // $sunglasses_btn 기능 없애기
            $sunglasses_btn.classList.remove('check_btn');
            $second_sunglass_filter.style.display = "none";

            // 안경렌즈 버튼 클릭했을 때 이미지 변경
            $sunglasses_list.style.display = "none";
            $count.innerHTML = $img_list_ch.length;
            $img_list.style.display = "flex";
            Reset();

        } else {
            this.classList.remove('check_btn');
            $second_filter.style.display = "none";
            $third_filter.style.display = "none";

            // 안경렌즈 버튼 클릭했을 때 이미지 변경
            $img_list.style.display = "none";
            $sunglasses_list.style.display = "flex";
            $count.innerHTML = $img_list_ch.length;

            Reset();
        }
    });

    $sunglasses_btn.addEventListener("click", function (e) {
        e.preventDefault();
        const isButtonActive = this.classList.contains('check_btn');
        // this.classList.remove('check_btn');

        if (!isButtonActive) {
            this.classList.add('check_btn');
            $second_sunglass_filter.style.display = "flex";

            // $spectacleLens_btn 기능 없애기
            $spectacleLens_btn.classList.remove('check_btn');
            $second_filter.style.display = "none";

            // 선글라스 버튼 클릭했을 때 이미지 변경
            $sunglasses_list.style.display = "flex";
            $count.innerHTML = $sunglasses_list_ch.length;
            $img_list.style.display = "none";
            $spectacle_lens_list.style.display = "none";
            $third_filter.style.display = "none";
            Reset();

        } else {
            this.classList.remove('check_btn');
            $second_sunglass_filter.style.display = "none";
            $third_filter.style.display = "none";

            // 선글라스 버튼 클릭했을 때 이미지 변경
            $img_list.style.display = "flex";
            $sunglasses_list.style.display = "none";
            $count.innerHTML = $sunglasses_list_ch.length;

            Reset();
        }
    });

    // 두번 째 third_filter 버튼 클릭되는 것
    for (let i = 0; i < $second_filter_ch.length; i++) {
        $second_filter_ch[i].addEventListener("click", function (e) {
            e.preventDefault();
            const isButtonActive = this.classList.contains('check_btn');

            for (let j = 0; j < $second_filter_ch.length; j++) {
                $second_filter_ch[j].classList.remove('check_btn');
            }

            // 렌즈 종류 버튼이 클릭되어 있지 않으면 $third_filter 화면이 안보이게 한다. 
            if (is_clicked) {
                $third_filter.style.display = "none";
            }

            if (!isButtonActive) {
                this.classList.add('check_btn');
            }
        });
    }

    // 세번 째 third_filter 버튼 클릭되는 것
    for (let i = 0; i < $third_filter_ch.length; i++) {
        $third_filter_ch[i].addEventListener("click", function (e) {
            e.preventDefault();
            const isButtonActive = this.classList.contains('check_btn');

            for (let j = 0; j < $third_filter_ch.length; j++) {
                $third_filter_ch[j].classList.remove('check_btn');
            }

            if (!isButtonActive) {
                this.classList.add('check_btn');
            }
        });
    }

    $sun_lens1.addEventListener("click", function (e) {
        e.preventDefault();
        const isButtonActive = this.classList.contains('check_btn');

        if (!isButtonActive) {
            this.classList.add('check_btn');

            // sun_lens2 기능 없애기
            $sun_lens2.classList.remove('check_btn');
            // for (let j = 0; j < $sun_lens2_list.length; j++) {
            //     $sun_lens2_list[j].style.display = "none";
            // }
        } else {
            this.classList.remove('check_btn');
            // for (let j = 0; j < $sun_lens2_list.length; j++) {
            //     $sun_lens2_list[j].style.display = "flex";
            // }
            // $sunglasses_list.style.display="flex";
        }
    });

    $sun_lens2.addEventListener("click", function (e) {
        e.preventDefault();
        const isButtonActive = this.classList.contains('check_btn');
        this.classList.remove('check_btn');

        if (!isButtonActive) {
            this.classList.add('check_btn');
            // $sun_lens1_list.style.display = "none";
            $sun_lens1.classList.remove('check_btn');
        } else {
            this.classList.remove('check_btn');
            // $sun_lens1_list.style.display = "flex";
        }
    });



    $repeat_btn.addEventListener("click", function (e) {
        e.preventDefault();
        $second_filter.style.display = "none";
        $second_sunglass_filter.style.display = "none";
        $third_filter.style.display = "none";
        $sunglasses_list.style.display = "none";
        $spectacle_lens_list.style.display = "none";
        $img_list.style.display = "flex";
        $count.innerHTML = $img_list_ch.length;


        $top_btn.forEach((element) => {
            element.classList.remove("check_btn");
            element.classList.add("no_check_btn");
        });

        Reset();
    });


    $lensStyle_btn.addEventListener("click", function (e) {
        e.preventDefault();
        const isButtonActive = this.classList.contains('check_btn');

        if (!isButtonActive) {
            // this.classList.add('check_btn');
            $third_filter.style.display = "none";
            is_clicked = false;
            $spectacle_lens_list.style.display = "none";
            $img_list.style.display = "flex";
        } else {
            $third_filter.style.display = "flex";
            $spectacle_lens_list.style.display = "flex";
            $img_list.style.display = "none";
            $count.innerHTML = $spectacle_lens.length;
            is_clicked = true;
        }
        for (let j = 0; j < $third_filter_ch.length; j++) {
            if ($third_filter_ch[j].classList.contains('check_btn'))
                $third_filter_ch[j].classList.remove('check_btn');
        }

    });


    function updateSecondButtonStates() {
        var second_btn1State = localStorage.getItem('second_btn1');
        var second_btn2State = localStorage.getItem('second_btn2');
        var second_btn3State = localStorage.getItem('second_btn3');
        var second_btn4State = localStorage.getItem('second_btn4');
        var second_btn5State = localStorage.getItem('second_btn5');
        var second_btn6State = localStorage.getItem('second_btn6');

        if (second_btn1State === 'true') {
            document.querySelector('#second_btn1').classList.add('check_btn');
        } if (second_btn2State === 'true') {
            document.querySelector('#second_btn2').classList.add('check_btn');
        } if (second_btn3State === 'true') {
            document.querySelector('#second_btn3').classList.add('check_btn');
        } if (second_btn4State === 'true') {
            document.querySelector('#second_btn4').classList.add('check_btn');
        } if (second_btn5State === 'true') {
            document.querySelector('#second_btn5').classList.add('check_btn');
        } if (second_btn6State === 'true') {
            document.querySelector('#second_btn6').classList.add('check_btn');
        }

    }

    // 페이지가 로드될 때 버튼 상태를 업데이트합니다.
    this.window.onload = updateSecondButtonStates;
});