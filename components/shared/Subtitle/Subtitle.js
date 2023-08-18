import "./Subtitle.css";

const Subtitle = (firstTitle, secondTitle, style) => {
  return `
  <div>
    <p class="padding-left-small text-with-border-left-gray">${firstTitle}</p>
    <p class="padding-left-small bold text-with-border-left-${style}">${secondTitle}</p>
  </div>
`;
};

export default Subtitle;
