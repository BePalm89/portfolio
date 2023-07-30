import "./About.css";
import Info from "../../shared/Info/Info";
import Title from "../../shared/Title/Title";

const About = () => {
  return `
  <div class="about-container"> 
  ${Title("about me")}
  <div class="description-container">
    <div class="description-text">
        <h3>Claudia Palmerini</h3>
        <p><i class="fas fa-map-marker-alt"></i><span>Barcelona, Spain</span></p>
        <p>Hi! I am Claudia Palmerini, a frontend engineer based in Barcelona, Spain since 2020 ( yes, I moved during covid time 😆 ). I am a civil engineer, graduated in Bologna, Italy. But then I discovered the amazing world of programming!! I am passionate about UI/UX and Web design. I am a skilled front-end developer with Angular and React. I am a fast learner, eager to learn new things and a team worker that gets the job done. I lived in different places, like Bologna, Milano and Torino in Italy, then Ulm and Weimar in Germany, but then I found my place in Barcelona. I love travelling around the world to discover new culture and take amazing photos. I also enjoy going to the beach with my friends in summer time and training in the gym. I have two crazy cats, Simba and Slash, I love them!!</p>
    </div>
    <div class="description-img">
      <img src="/images/working.svg" alt="woman working illustration"/>
    </div>
  </div>
  ${Info()}
  <div class="more-info-container">
    <div class="hobbies-container">
      <p class="padding-left-small text-with-border-left-gray">What I do</p>
      <p class="padding-left-small bold text-with-border-left-primary">in my free time</p>
      <div class="hobbies-img-container">
        <div class="img-container">
          <img src="/images/travelling.svg"/>
        </div>
        <div class="img-container">
          <img src="/images/photographer.svg"/>
        </div>
        <div class="img-container">
          <img src="/images/playing-piano.svg"/>
        </div>
        <div class="img-container">
          <img src="/images/cats.svg"/>
        </div>
        <div class="img-container">
          <img src="/images/training.svg"/>
        </div>
      </div>
    </div>
    <div class="social-container">
      <p class="padding-left-small text-with-border-left-gray">Whare you can find me</p>
      <p class="padding-left-small bold text-with-border-left-secondary">on social network</p>
    </div>
  </div>
  </div>
  `;
};

export default About;
