import Home from "../components/pages/Home/Home";
import About from "../components/pages/About/About";
import Experience from "../components/pages/Experience/Experience";
import Projects from "../components/pages/Projects/Projects";
import Contact from "../components/pages/Contact/Contact";
import NotFound from "../components/shared/NotFound/NotFound";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/experience",
    component: Experience,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

export const router = () => {
  const path = window.location.pathname;
  const { component } = routes.find((route) => route.path === path) || {};
  const navLinks = document.querySelectorAll("nav a");
  const asideElement = document.querySelector("aside");

  if (component) {
    document.querySelector("main").innerHTML = component();
    navLinks.forEach((link) => {
      link.parentNode.classList.remove("active");
    });
    const currentLink = document.querySelector(`nav a[href="${path}"]`);
    if (currentLink) {
      currentLink.parentNode.classList.add("active");
      asideElement.classList.remove("open");
    }
  } else {
    document.querySelector("main").innerHTML = NotFound();
  }
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", router);

export const addListeners = () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const href = link.getAttribute("href");
      history.pushState(null, null, href);

      router();
    });
  });
};
