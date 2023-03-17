function myFunction() {
    let x = document.querySelector(".header__content__navbar__menu");
    let allLinks = document.getElementsByClassName(
        "header__content__navbar__menu__link"
    );
    x.classList.toggle("--show");

    for (let i = 0, n = allLinks.length; i < n; i++) {
        allLinks[i].onclick = function () {
            x.classList.toggle("--show");
        };
    }
}
