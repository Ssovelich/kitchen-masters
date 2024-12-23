const classes = [
  'hiddenLeft',
  'hiddenRight',
  'hiddenCenter',
  'hiddenTop',
  'hiddenBot',
  'hiddenHowToPlayInfo',
  'hiddenHowToPlayImg',
  'hiddenFeaturesFirstEl',
  'hiddenFeaturesSecondEl',
  'hiddenFeaturesThirdEl',
  'hiddenFeaturesFourthEl',
  'hiddenFeaturesFifthEl',
  'hiddenDownGameImg',
  'hiddenDownGameInfo',
];

const contents = document.querySelectorAll(
  classes.map(className => `.${className}`).join(', ')
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

contents.forEach(content => {
  observer.observe(content);
});

const handleScroll = () => {
  contents.forEach(content => {
    if (content.getBoundingClientRect().top <= window.innerHeight * 0.8) {
      content.classList.add('show');
    }
  });
};

if (/Mobi|Android/i.test(navigator.userAgent)) {
  window.addEventListener('scroll', handleScroll);
}

window.addEventListener('resize', () => {
  contents.forEach(content => observer.observe(content));
});

window.addEventListener('load', () => {
  document.querySelectorAll('.hero-img, .hiddenDownGameBtn').forEach(img => {
    img.classList.add('show');
  });
});

window.addEventListener('load', () => {
  setTimeout(() => {
    const elements = document.querySelectorAll('.hiddenHeroDetails');
    elements.forEach(element => {
      element.classList.add('show');
    });
  }, 2000);
});
