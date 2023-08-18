import "./Hobbies.css";
import Subtitle from "../../../shared/Subtitle/Subtitle";

const hobbies = [
  "travelling",
  "photographer",
  "playing-piano",
  "cats",
  "training",
];

const Hobbies = () => {
  return `
  <div class="primary-container">
  ${Subtitle("What I do", "in my free time", "primary")}
    <div class="hobbies-img-container">
    ${hobbies
      .map((hobbie) => {
        return `
            <div class="img-container">
                <img src="/images/${hobbie}.svg" alt="${hobbie}"/>
            </div>
        `;
      })
      .join("")}
    </div>
  </div>`;
};

export default Hobbies;
