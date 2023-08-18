import "./style.css";
import Header from "./components/shared/Header/Header";
import LateralNav from "./components/shared/LateralNav/LateralNav";
import { router, addListeners } from "./router/router";
import { playAnimation } from "./utils/utils";

Header();
LateralNav();

router();
addListeners();

// Typing animation
document.addEventListener("DOMContentLoaded", () => {
  const [p, h2] = document.querySelectorAll(".typing");
  playAnimation(p);
  playAnimation(h2);
});

//Opend and close laterl nav bar for desktop and mobile
const burgerMenuElement = document.querySelector(".header-container div");

burgerMenuElement.addEventListener("click", () => {
  const asideElement = document.querySelector("aside");
  asideElement.classList.toggle("open");
});
