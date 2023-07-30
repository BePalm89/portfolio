import { setTitlePage } from "../../../utils/utils";
import "./Experience.css";

const Experience = () => {
  const experienceContainer = document.createElement("div");
  experienceContainer.classList.add(".experience-container");

  setTitlePage("Experince", experienceContainer);

  return experienceContainer.outerHTML;
};

export default Experience;
