import "./Languages.css";
import Subtitle from "../../../shared/Subtitle/Subtitle";
import { languages } from "../data";

const Languages = () => {
  const languageItems = languages.map((language) => {
    const filledCircles = Array.from(
      { length: language.proficency },
      (_, index) => {
        return `<div class="filled-circle" key="${index}"></div>`;
      }
    ).join("");

    const outlineCircles = Array.from(
      { length: 5 - language.proficency },
      (_, index) => {
        return `<div class="outline-circle" key="${index}"></div>`;
      }
    ).join("");

    return `
          <div class="lang-item">
            <div class="lang-text">
                <p>${language.language}</p>
                <p>${language.level}</p>
            </div>
            <div class="circle-container">
                ${filledCircles}${outlineCircles}
            </div>
          </div>
        `;
  });

  return `
        <div class="secondary-container">
          ${Subtitle("My professional", "languages skills", "secondary")}
          <div class="languages">
            ${languageItems.join("")}
          </div>
        </div>`;
};

export default Languages;
