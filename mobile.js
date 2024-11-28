const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('menu-open', isOpen);
  document.body.classList.toggle('no-scroll', isOpen);
});

document.addEventListener('click', (event) => {
  if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
    hamburger.setAttribute('aria-expanded', false);
  }
});
