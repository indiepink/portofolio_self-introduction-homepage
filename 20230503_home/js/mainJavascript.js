window.addEventListener("load", function () {

    const emphasis = document.querySelectorAll('.emphasis');
    const $article1 = document.querySelector('#article1');
    const $article2 = document.querySelector('#article2');
 


    // 글자 나오기
    for (let i = 0; i < emphasis.length; i++) {
        window.setTimeout(function () {
            emphasis[i].style.transitionDuration = '1s';
            emphasis[i].style.opacity = "1";
        }, 1000);
    }

    function moveImage($element, standard ,distance) {
        return function() {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          
          // scrollFraction은 스크롤이 어느 위치에 있는지 계산, 0-1사이의 값
          // 0이면 최상단, 1이면 최하단을 의미
          const scrollFraction = scrollTop / scrollHeight;
          const leftPosition = standard + (scrollFraction * distance);
          $element.style.transform = `translateX(${leftPosition}px)`;
        }
      }
      
      window.addEventListener('scroll', (e) => {
        e.preventDefault();
      
        requestAnimationFrame(moveImage($article1, 510, -550));
        requestAnimationFrame(moveImage($article2,-510, 550));
      });

});



