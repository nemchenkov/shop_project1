const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  toggle.classList.add("active");
  nav.classList.toggle("active");
});
