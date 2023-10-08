const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    nav.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
