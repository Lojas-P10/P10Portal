function initNavbar() {
	const navLinks = document.querySelectorAll(".nav-links");
	const nav = document.querySelector("nav");

	const minWidthForEffect = 1100;

	const isHomePage = window.location.pathname === "/" || window.location.pathname.includes("index.html");

	function applyScrolledStyle() {
		nav.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
		nav.style.background = "#fcfcfc";
		nav.style.height = "6em";
		nav.style.top = "0";
		nav.style.position = "fixed";
		nav.style.width = "100%";

		navLinks.forEach((link) => {
			link.style.color = "#2c2c2b";
		});
	}

	function applyTopStyle() {
		nav.style.height = "11em";
		nav.style.boxShadow = "none";
		nav.style.background = "transparent";
		navLinks.forEach((link) => {
			link.style.color = "#fcfcfc";
		});
	}

	function handleScroll() {
		if (!nav) return;

		if (!isHomePage) return;

		if (window.innerWidth >= minWidthForEffect) {
			if (window.scrollY > 5) {
				applyScrolledStyle();
			} else {
				applyTopStyle();
			}
		} else {
			applyScrolledStyle();
		}
	}

	if (!isHomePage) {
		applyScrolledStyle();
	} else {
		handleScroll();
	}

	window.addEventListener("scroll", handleScroll);
}

function loadComponent(id, file, callback) {
	fetch(file)
		.then((response) => response.text())
		.then((data) => {
			document.getElementById(id).innerHTML = data;

			if (callback) callback();
		})
		.catch((error) => console.error("Erro ao carregar:", error));
}

loadComponent("navbar", "/components/navbar.html", initNavbar);
loadComponent("footer", "/components/footer.html");

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
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
