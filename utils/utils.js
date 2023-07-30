import Title from "../components/shared/Title/Title";

const textToDisplay = "Frontend Engineer";
let index = 0;
let isAdding = true;

export const playAnimation = (typingElement) => {
  setTimeout(
    () => {
      typingElement.innerText = textToDisplay.slice(0, index);

      if (isAdding) {
        index++;
        if (index > textToDisplay.length) {
          isAdding = false;
          setTimeout(() => playAnimation(typingElement), 1000);
          return;
        }
      } else {
        index--;
        if (index === 0) {
          isAdding = true;
        }
      }

      playAnimation(typingElement);
    },
    isAdding ? 120 : 80
  );
};

export const setTitlePage = (title, container) => {
  const titleComponent = Title(title);
  container.innerHTML = titleComponent;
};
