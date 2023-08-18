import "./About.css";
import Info from "../../shared/Info/Info";
import Title from "../../shared/Title/Title";
import Description from "./Description/Description";
import infoData from "./data";
import Hobbies from "./Hobbies/Hobbies";
import SocialNetwork from "../../shared/SocialNetwork/SocialNetwork";

const About = () => {
  return `
  <div class="about-container"> 
    ${Title("about me")}
    ${Description()}
    ${Info(infoData)}
    <div class="more-info-container">
      ${Hobbies()}
      ${SocialNetwork()}
    </div>
  </div>
  `;
};

export default About;
