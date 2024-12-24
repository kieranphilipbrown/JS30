const fullUrl = window.location.href;

// Use URL constructor
const url = new URL(fullUrl);
const path = url.pathname;

// get nav list items
const navListItems = document.querySelectorAll('.nav__item');

// loop through nav items and apply current class
for (const item of navListItems) {
    if (item.dataset.path === path) {
        item.classList.add('nav__list_item--current');
    }
}
