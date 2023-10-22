document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links");
  const nav = document.querySelector("nav");

  const minWidthForEffect = 1100; // Largura mínima da tela para o efeito

  function handleScroll() {
    if (window.innerWidth >= minWidthForEffect) {
      if (window.scrollY > 5) {
        nav.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
        nav.style.background = "#fcfcfc";
        nav.style.height = "6em";
        navLinks.forEach((link) => {
          link.style.color = "#2c2c2b";
        });
      } else {
        nav.style.height = "11em";
        nav.style.boxShadow = "none";
        navLinks.forEach((link) => {
          link.style.color = "#fcfcfc";
        });
        nav.style.background = "transparent";
      }
    } else {
      nav.style.background = "white";
      nav.style.height = "6em";
    }
  }

  window.addEventListener("scroll", handleScroll);

  handleScroll();
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.nextElementSibling;
  const icon = item.querySelector("i");

  item.addEventListener("click", () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        const otherAnswer = otherItem.nextElementSibling;
        const otherIcon = otherItem.querySelector("i");
        otherAnswer.classList.remove("active");
        otherIcon.classList.remove("active");
        otherAnswer.style.maxHeight = "0";
        otherAnswer.style.padding = "0";
      }
    });

    answer.classList.toggle("active");
    icon.classList.toggle("active");
    if (answer.classList.contains("active")) {
      answer.style.maxHeight = "8em";
      answer.style.padding = "2em 1em";
    } else {
      answer.style.padding = "0";
      answer.style.maxHeight = "0";
    }
  });
});

function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "flex";

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";

  document.removeEventListener("keydown", closeModal);

  modal.removeEventListener("click", closeModal);
}

document.getElementById("openModal").addEventListener("click", openModal);
document.getElementById("closeModal").addEventListener("click", closeModal);
