document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const openMenuBtn = document.querySelector('.open-mobile-menu-btn');
  const closeMenuBtn = document.querySelector('.close-mobile-menu-btn');
  const body = document.body;

  openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
    body.classList.add('no-scroll');
  });

  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    body.classList.remove('no-scroll');
  });

  const menuLinks = document.querySelectorAll('.mobile-menu-list-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      body.classList.remove('no-scroll');
    });
  });
});
