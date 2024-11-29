const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('menu-open');
  hamburger.setAttribute('aria-expanded', isOpen);
});



const slides = document.querySelectorAll('.slide');
let index = 0;

const showSlide = (n) => {
  slides.forEach((slide) => {
    slide.style.opacity = '0';
  });
  slides[n].style.opacity = '1';
};

const nextSlide = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

setInterval(nextSlide, 3000); // Change slide every 3 seconds

document.addEventListener('DOMContentLoaded', () => {
  showSlide(index);
});
