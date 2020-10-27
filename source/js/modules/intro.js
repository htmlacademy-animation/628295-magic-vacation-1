const getRandomSkew = () => Math.round(Math.random() * 100) % 4 / 100;

const ORDER_DELAY = [0, 0.12, 0.06];

const getAnimationDelay = (index) => ORDER_DELAY[index % 3] + getRandomSkew();

const getCharterElement = (initialDelay) => (charter, index) => {
  const charterElement = document.createElement(`span`);
  charterElement.textContent = charter;

  charterElement.style.animationDelay = `${getAnimationDelay(index) + initialDelay}s`;

  return charterElement;
};

const getWordElement = (options = {}) => (word) => {
  const {initialDelay = 0} = options;

  const wrapper = document.createElement(`span`);
  wrapper.classList.add(`animation-show-text__word`);

  word
    .split(``)
    .map(getCharterElement(initialDelay))
    .forEach((charterElement) => {
      wrapper.appendChild(charterElement);
    });

  return wrapper;
};

const animateShowText = (element, options) => {
  const text = element.textContent;
  element.textContent = ``;

  text
    .split(` `)
    .map(getWordElement(options))
    .forEach((word) => {
      element.appendChild(word);
    });
};

export default () => {
  animateShowText(document.getElementsByClassName(`intro__title`)[0]);
  animateShowText(document.getElementsByClassName(`intro__date`)[0], {initialDelay: 1});
};
