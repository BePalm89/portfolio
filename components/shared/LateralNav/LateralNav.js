import "./LateralNav.css";
import { asideLinks } from "./data";

const template = () => {
  return `
    <div class="aside-container">
      <div class="aside-info">
        <div class="aside-img-container">
          <img src="images/profile-pic.jpg"/>
        </div>
        <h3>Claudia Palmerini</h3>
        <p class="typing"></p>
      </div>
      <nav>
        <ul>
          ${asideLinks
            .map((link) => {
              return `
              <li>
                <div class="icon-container">
                  <i class="fa fa-${link.icon}" aria-hidden="true"></i>
                </div>
                <a href="${link.path}">${link.label}</a>
            </li>`;
            })
            .join("")}
        </ul>
      </nav>
      <footer>
        <p>Create with 💝 by Claudia Palmerini</p>
      </footer>
    </div>
`;
};

const LateralNav = () =>
  (document.querySelector("aside").innerHTML = template());

export default LateralNav;
