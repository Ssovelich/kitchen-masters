document.addEventListener('DOMContentLoaded', () => {
  const btnUp = document.querySelector('.btn-up');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnUp.classList.add('show');
      btnUp.classList.remove('hide');
    } else {
      btnUp.classList.add('hide');
      btnUp.classList.remove('show');
    }
  });

  btnUp.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
