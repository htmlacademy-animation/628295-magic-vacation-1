export default () => {
  let rules = document.querySelectorAll(`.rules__item`);
  let rulesLink = document.querySelector(`.rules__link`);

  // подписываемся на кастомное событие смены экранов удаления класса с анимацией
  document.body.addEventListener(`screenChanged`, (event) => {
    if (event.detail.screenName === `rules`) {
      rulesLink.classList.remove(`rules__link--animation`);
    }
  });

  // подписываемся на окончание анимации у последнего правила для запуска анимации появления кнопки
  rules[rules.length - 1].addEventListener(`animationend`, () => {
    rulesLink.classList.add(`rules__link--animation`);
  });
};
