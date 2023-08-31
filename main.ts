const hamburgerButton = document.querySelector('#open-menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

const carousel = document.querySelector('.carousel');

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

let actualSlide = 0;

const animateCarousel = () => {
  const carouselChildrens = carousel?.children;
  if (!carouselChildrens) return;
  const nchildrens = carouselChildrens.length;
  const prevSlide = actualSlide - 1 >= 0 ? actualSlide - 1 : nchildrens - 1;
  console.log(actualSlide);
  carouselChildrens[actualSlide].classList.add('opacity-100');

  // validate if is one of the carousel children.
  actualSlide + 1 <= nchildrens - 1 ? actualSlide++ : (actualSlide = 0);

  //change the className of the previous slide
  carouselChildrens[prevSlide].classList.remove('opacity-100');
  carouselChildrens[prevSlide].classList.add('opacity-0');
};
setInterval(() => {
  animateCarousel();
}, 2000);
