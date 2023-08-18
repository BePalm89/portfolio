import "./FiltersTab.css";
import { filtersTabList } from "../data";

const FiltersTab = () => {
  return `
        <div class="filters-container">
            <ul>
                ${filtersTabList
                  .map(
                    (link) =>
                      `
                        <li class="${
                          link.toLowerCase() === "all" ? "active-link" : ""
                        }" data-category="${link.toLowerCase()}">${link.toUpperCase()}</li>
                    `
                  )
                  .join("")}
            </ul>
        </div>
    `;
};

export default FiltersTab;
