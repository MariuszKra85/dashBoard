const modeButton = document.querySelector('#modeButton');
let mode = 'Dark';

const side = document.querySelector(`body`);
const modeSlider = document.querySelector(`.mode--slider-dot`);
const modeName = document.querySelector(`#modeName`);

const boxTitles = document.querySelectorAll('.box--title');
const slider = document.querySelector('.mode--name');
const headerText = document.querySelector('.header--text');

const init = () => {
  modeButton.addEventListener('click', changeTheme);
  console.log('works');
};

const changeTheme = () => {
  const cardsArr = Array.from(document.querySelectorAll(`.followers`));
  const boxesArr = Array.from(document.querySelectorAll(`.box`));
  const boxTitlesArr = Array.from(boxTitles);
  const all = cardsArr.concat(boxesArr);

  side.classList.toggle('light');
  side.classList.toggle('dark');

  side.classList.value.includes('dark') ? (mode = 'Dark') : (mode = 'Light');

  all.forEach((e) => {
    // e.style.backgroundColor = 'hsl(227, 47%, 96%)';
    e.classList.toggle('box-light');
  });
  boxTitlesArr.forEach((e) => {
    e.classList.toggle('box--title--light');
  });

  modeSlider.classList.toggle(`switch-mode`);
  slider.classList.toggle('mode--name-light');
  headerText.classList.toggle('header--text-light');
  modeName.textContent = `${mode} mode`;
};
init();
