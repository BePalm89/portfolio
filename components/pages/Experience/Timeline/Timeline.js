import "./Timeline.css";

const Timeline = (data) => {
  return `
  <div class="timeline-container">
    <div class="center-line"></div>
    <div class="timeline-list">
      <ul>
          ${data
            .map(
              (item, index) => `
              <li class="${index % 2 === 0 ? "even" : "odd"}">
                  <div class="timeline-content">
                      <div class="logo-circle">
                        <a href="${item.website}" target=”_blank”>
                          <img src="${item.logo}" alt=${item.logo}>
                        </a>
                      </div>
                      <div class="description">
                          <p><span>${item.startDate} - ${
                item.endDate
              }</span></p>
                          <p>${item.location}</p>
                          <p class="role">${item.role}</p>
                          <p>${item.description}</p>
                      </div>
                  </div>
              </li>
          `
            )
            .join("")}
      </ul>
</div>`;
};

export default Timeline;
