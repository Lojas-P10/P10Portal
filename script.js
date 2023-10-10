const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 5) {
    nav.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
    nav.style.background = 'white';
  } else {
    nav.style.boxShadow = 'none';
    nav.style.background = 'transparent';
  }
});
