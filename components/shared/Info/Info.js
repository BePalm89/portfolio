import "./Info.css";

const Info = (infoData) => {
  return `
    <div class="info-container">
        ${infoData
          .map((info) => {
            return `
            <div class="info-box">
                <div class="info-icon">
                    <i class="fas fa-${info.icon} aria-hidden="true"></i>
                </div>
                <div class="info-text">
                    <p>${info.label}:</p>
                    <p>${info.info}</p>
                </div>
            </div>

            `;
          })
          .join("")}
    </div>
    `;
};

export default Info;
