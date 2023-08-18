import "./Skills.css";
import Subtitle from "../../../shared/Subtitle/Subtitle";
import { skills } from "../data";

const Skills = () => {
  return `
    <div class="primary-container align-text-left">
      <div>
        ${Subtitle("My professional", "work skills", "primary")}
      </div>
      <div class="skills-box">
      ${skills
        .map(
          (skill) => `
        <div class="skill-box">
          <div class="skill-title">
            <p>${skill.technology}</p>
            <p>${skill.level}%</p>
          </div>
          <div class="skills-outer-bar">
            <div class="skill-inner-bar" style="width: ${skill.level}%;"></div>
          </div>
        </div>
      `
        )
        .join("")}
      </div>
    </div>
  `;
};

export default Skills;
