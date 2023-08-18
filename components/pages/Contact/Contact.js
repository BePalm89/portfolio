import "./Contact.css";
import Title from "../../shared/Title/Title";
import ContactForm from "./ContactForm/ContactForm";
import infoData from "../About/data";
import Info from "../../shared/Info/Info";
import SubTitle from "../../shared/Subtitle/Subtitle";
import SocialNetwork from "../../shared/SocialNetwork/SocialNetwork";

const Contact = () => {
  const info = infoData.filter((info) => info.label !== "Job");

  return `
    <div class="contact-container">
      <div>
        ${Title("contact me")} 
      </div>
      ${ContactForm()}
      <div class="contact-info">
        ${SubTitle("Contact information", "find me here", "primary")}
        ${Info(info)}
      </div>
      <div class="contact-info">
      ${SocialNetwork()}
    </div>
    </div>
    `;
};

export default Contact;
