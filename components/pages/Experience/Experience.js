import "./Experience.css";
import Title from "../../shared/Title/Title";
import Subtitle from "../../shared/Subtitle/Subtitle";
import Timeline from "./Timeline/Timeline";
import Skills from "./Skills/Skills";
import { workHistoryData, education } from "./data";
import Languages from "./Languages/Languages";

const Experience = () => {
  return `
    <div class="experience-container">
    <div>
    ${Title("experience")} 
    </div>
        <div class="work-container">
            ${Subtitle("My professional", "work history", "primary")}
            <a href="../../../public/CV_2022_EN.pdf" target=”_blank”>
                <button class="btn-primary"><i class="fa fa-cloud-download-alt"></i> Download CV</button>
            </a>
        </div>
        <div>
            ${Timeline(workHistoryData)}
        </div>
        <div class="skills-container">
            <div class="work-skills">
                ${Skills()}
            </div>
            <div class="lang-skills align-text-left ">
                ${Languages()}
            </div>
        </div>
        <div class="align-text-left mg-top">
            ${Subtitle("My educational", "wbackground history", "secondary")}
        </div>
        <div>
            ${Timeline(education)}    
        </div>
    </div>`;
};

export default Experience;
