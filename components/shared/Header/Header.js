import "./Header.css";

const template = () => {
  return `
    <header>
      <div class="header-container">
        <h3>Claudia Palmerini</h3>
        <div>
          <i class="fa fa-bars"></i>
        </div>
      </div>
    </header>
    `;
};

const Header = () => {
  document.querySelector("header").innerHTML = template();
};
export default Header;
