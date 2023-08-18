import "./CardsList.css";
import { projects } from "../data";

const CardsList = (filteredProjects) => {
  const projectsToRender = filteredProjects || projects;
  return `
  ${
    projectsToRender.length === 0
      ? `
    <div class="wip">
      <img src="/images/wip.svg" alt="work in progress" />
    </div>
    `
      : ""
  }
        <div class="cards-container">
        
            ${projectsToRender
              .map(
                (project) => `
                <div class="card-project">
                    <div class="img-project-container">
                        <img src=${project.img} alt=${project.name} />
                        <div class="card-body">
                            <p>${project.name}</p>
                            <p>${project.technology.toUpperCase()}</p> 
                        </div>
                        <div class="card-links">
                            ${
                              project.githubLink
                                ? `<a href=${project.githubLink} target="_blank"><i class="fab fa-github"></i> </a>`
                                : ""
                            }
                            ${
                              project.website
                                ? `<a href=${project.website} target="_blank"><i class="fas fa-link"></i></a>`
                                : ""
                            }

                        </div>
                    </div>  
                </div>
            `
              )
              .join("")}
        </div>
    `;
};

export default CardsList;
