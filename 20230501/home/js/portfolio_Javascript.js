window.addEventListener("load", function () {
    const $clicked = document.querySelector("#clicked");
    const $content2 = document.querySelector("#content2");
    const $container = document.querySelector("#container");
    const $porimg = document.querySelectorAll(".porimg");
    const $interiamain = this.document.querySelector("#interia_main");
    const $interiadetail = this.document.querySelector("#interia_detail");

    $clicked.addEventListener("click", function () {
        $container.style.height = '4150px';
        $content2.style.display = "block";
    });

    $porimg.forEach(function (img) {
        img.addEventListener("mouseenter", function () {
            img.style.filter = "grayscale(0)";
            img.style.transitionDuration = "0.6s";
            img.style.transform= "scale(1.1)"; 
        });
    });
    
    $porimg.forEach(function (img) {
        img.addEventListener("mouseleave", function () {
            img.style.filter = "grayscale(100%)";
            img.style.transform= "scale(1)"; 
        });
    });

    function moveImage($element, distance) {
        return function() {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrollFraction = scrollTop / scrollHeight;
          const leftPosition = 460 + (scrollFraction * distance);
          $element.style.left = `${leftPosition}px`;
        }
      }
      
      window.addEventListener('scroll', (e) => {
        e.preventDefault();
      
        requestAnimationFrame(moveImage($interiadetail, 500));
        requestAnimationFrame(moveImage($interiamain, -500));
      });

});