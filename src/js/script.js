const burgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navLinks = document.querySelector(".nav-links");
const allNavLinks = document.querySelectorAll(".nav-link");

const showMenu = () => {
	navLinks.classList.toggle("show");
};

allNavLinks.forEach((item) =>
	item.addEventListener("click", () => navLinks.classList.remove("show"))
);

burgerBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", showMenu);
