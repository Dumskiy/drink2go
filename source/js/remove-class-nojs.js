const ELEMENTS = [
  "header__navigation-site",
  "header__toggle",
  "map__interactive",
  "map__image"
];

export const initRemoveClassNojs = () => {
  removeClassNojs(ELEMENTS);
}

const removeClassNojs = (array) => {

  array.forEach(element => {
    const elementsNojs = document.querySelectorAll(`.${element}--nojs`);

    elementsNojs.forEach(elementNojs => {
      elementNojs.classList.remove(`${element}--nojs`);
    });
  });
}
