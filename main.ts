const hamburgerButton = document.querySelector('#open-menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

window.addEventListener('resize', () => {
  console.log(window.innerWidth);
});

const toggleDropDownMenu = () => {
  if (dropdownMenu?.className.includes('-translate-y-full')) {
    dropdownMenu?.classList.remove('-translate-y-full');
  } else {
    dropdownMenu?.classList.add('-translate-y-full');
  }
};
hamburgerButton?.addEventListener('click', toggleDropDownMenu);
