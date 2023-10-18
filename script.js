const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 5) {
    nav.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
    nav.style.background = 'white';
    nav.style.height = '5em';
    logo.style.width = '5em';
  } else {
    logo.style.width = '11em';
    nav.style.height = '11em';
    nav.style.boxShadow = 'none';
    nav.style.background = 'transparent';
  }
});

