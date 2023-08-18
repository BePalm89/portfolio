import "./Projects.css";
import Title from "../../shared/Title/Title";
import FiltersTab from "./FiltersTab/FiltersTab";
import CardsList from "./CardsList/CardsList";
import { projects } from "./data";

const Projects = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const handleFilter = (event) => {
      const selectedTechnology = event.target.dataset.category;

      filters.forEach((filter) => {
        filter.classList.remove("active-link");
      });

      // Add active-link class to the clicked filter
      event.target.classList.add("active-link");

      if (selectedTechnology !== "all") {
        const filteredProjects =
          projects.filter(
            (project) => project.technology.toLowerCase() === selectedTechnology
          ) ?? [];

        if (filteredProjects) {
          document.querySelector(".cards-container").innerHTML =
            CardsList(filteredProjects);
        }
      } else {
        document.querySelector(".cards-container").innerHTML =
          CardsList(projects);
      }
    };

    const filters = document.querySelectorAll(".filters-container li");

    filters.forEach((filter) => {
      filter.addEventListener("click", handleFilter);
    });
  });

  return `
    <div class="projects-container">
      ${Title("projects")}

      ${FiltersTab()}

      ${CardsList()}
    </div>`;
};

export default Projects;
