window.addEventListener("load", function () {
    const clicked = document.querySelector("#clicked");
    const content2 = document.querySelector("#content2");
    const container = document.querySelector("#container");

    clicked.addEventListener("click", function () {
        container.style.height = '4150px';
        content2.style.display = "block";
    });
});