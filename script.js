var typed = new Typed(".typing", {
  strings: [
    "",
    "Product Associate",
    "Flutter Developer",
    "Java Developer",
    "Business Analyst",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const toggler = document.querySelector(".toggler");
const dayNight = document.getElementById("day-night");
const themeBtn = document.getElementById("themebtn");
let colorMenu = null;
styleSwitcherToggle.addEventListener("click", () => {
  toggler.classList.toggle("hidden");
});

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

themeBtn.addEventListener("click", () => {
  if (!colorMenu) {
    colorMenu = document.createElement("div");
    colorMenu.classList.add("color-menu", "container");

    const colors = ["royalblue", "#e30959", "#ec6d18", "#18e5ec", "#18eca5"];

    colors.forEach((color) => {
      const colorOption = document.createElement("div");
      colorOption.classList.add("color-option");
      colorOption.style.backgroundColor = color;
      colorOption.addEventListener("click", () => {
        document.documentElement.style.setProperty("--skin-color", color);
      });
      colorMenu.appendChild(colorOption);
    });

    toggler.appendChild(colorMenu);
  } else {
    colorMenu.remove();
    colorMenu = null;
  }
});
const navLinks = document.querySelectorAll(".nav-link");
function handleNavLinkClick(event) {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
}
navLinks.forEach((link) => {
  link.addEventListener("click", handleNavLinkClick);
});
