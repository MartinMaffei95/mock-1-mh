"use strict";
const hamburgerButton = document.querySelector('#open-menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');
window.addEventListener('resize', () => {
    console.log(window.innerWidth);
});
const toggleDropDownMenu = () => {
    if (dropdownMenu === null || dropdownMenu === void 0 ? void 0 : dropdownMenu.className.includes('-translate-y-full')) {
        dropdownMenu === null || dropdownMenu === void 0 ? void 0 : dropdownMenu.classList.remove('-translate-y-full');
    }
    else {
        dropdownMenu === null || dropdownMenu === void 0 ? void 0 : dropdownMenu.classList.add('-translate-y-full');
    }
};
hamburgerButton === null || hamburgerButton === void 0 ? void 0 : hamburgerButton.addEventListener('click', toggleDropDownMenu);
