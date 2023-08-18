import "./SocialNetwork.css";
import socialNetworkData from "./data";
import Subtitle from "../Subtitle/Subtitle";

const SocialNetwork = () => {
  return `
  <div class="secondary-container">
    ${Subtitle("Whare you can find me", "on social network", "secondary")}
    <div class="social-network-container">
        ${socialNetworkData
          .map((social) => {
            return `
            <a href="${social.url}" target="_blank">
            <i class="fab fa-${social.icon}"></i>
            </a>`;
          })
          .join("")}
    </div>
  </div>
    `;
};

export default SocialNetwork;
