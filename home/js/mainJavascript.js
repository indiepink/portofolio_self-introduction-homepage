window.addEventListener("load", function () {

   
   
    // 글자 나오기
    const emphasis = document.querySelectorAll(".emphasis");
    const hourglass = document.querySelector("#hourglass");

    for (let i = 0; i < emphasis.length; i++) {
        window.setTimeout(function () {
            emphasis[i].style.transitionDuration = '1s';
            emphasis[i].style.opacity = "1";
        }, 1000);
    }
    
    // 모래시계 움직이기
    hourglass.addEventListener('mouseenter', (e) => {
        e.preventDefault();

        hourglass.classList.add('infinite_rotating_logo');
    });

    hourglass.addEventListener('mouseleave', (e) => {
        e.preventDefault();
        hourglass.classList.remove('infinite_rotating_logo');
    });

});

// 모래시계 움직이기 - jQuery
// $(function(){
//     $('#hourglass').on('mouseenter', function(){
//         $('#hourglass').addClass('infinite_rotating_logo');
//     }).on('mouseleave', function(){
//         $('#hourglass').removeClass('infinite_rotating_logo');
//     });   
// });
