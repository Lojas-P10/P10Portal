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

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.nextElementSibling;
  const icon = item.querySelector('i');

  item.addEventListener('click', () => {
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        const otherAnswer = otherItem.nextElementSibling;
        const otherIcon = otherItem.querySelector('i');

        otherAnswer.classList.remove('active');
        otherIcon.classList.remove('active');
        otherAnswer.style.maxHeight = "0";
        otherAnswer.style.padding = "0";
      }
    });

    answer.classList.toggle('active');
    icon.classList.toggle('active');
    if (answer.classList.contains('active')) {
      answer.style.maxHeight = "8em";
      answer.style.padding = "2em 1em";
    } else {
      answer.style.padding = "0";
      answer.style.maxHeight = "0";
    }
  });
});