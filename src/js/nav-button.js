var navOpenButton = document.querySelector(".nav__button--open");
var navCloseButton = document.querySelector(".nav__button--close");
var nav = document.querySelector(".nav");

if (navOpenButton) {
    var fadeEffect = function(elem) {
        if (elem.classList.contains("fade_in")) {
            elem.classList.remove("fade_in");
        } else {
            setTimeout(function() {
                elem.classList.add("fade_in");
            }, 600);
        }
    };

    navOpenButton.addEventListener("click", function() {
        nav.classList.add("nav_open");
        var navItem = document.querySelector(".nav__item");
        fadeEffect(navItem);
    });

    navCloseButton.addEventListener("click", function() {
        var navItem = document.querySelector(".nav__item");
        fadeEffect(navItem);
        setTimeout(function() {
            nav.classList.remove("nav_open");
        }, 600);
    });
}
