function myFunction() {
    var x = document.querySelector(".header__content__nav-bar__menu");
    var allLinks = document.getElementsByClassName("header__link");
    x.classList.toggle("--show");

    for (var i = 0, n = allLinks.length; i < n; i++) {
        allLinks[i].onclick = function () {
            x.classList.toggle("--show");
        };
    }
}
