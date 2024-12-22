const contents = document.querySelectorAll(
  '.hiddenLeft, .hiddenRight, .hiddenCenter, .hiddenTop, .hiddenBot'
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // отключаем наблюдение после появления
      }
    });
  },
  {
    threshold: 0.5, // 50% видимости элемента
  }
);

// Наблюдаем за каждым элементом
contents.forEach(content => {
  observer.observe(content);
});

window.addEventListener('resize', () => {
  contents.forEach(content => observer.observe(content));
});

window.addEventListener('scroll', () => {
  contents.forEach(content => observer.observe(content));
});
