const navLinks = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  navLinks.style.display = "flex";
  closeMenuBtn.style.display = "block";
  menuBtn.style.display = "none";
});

closeMenuBtn.addEventListener("click", () => {
  navLinks.style.display = "none";
  closeMenuBtn.style.display = "none";
  menuBtn.style.display = "flex";
});
