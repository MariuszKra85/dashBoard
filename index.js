const modeButton = document.querySelector('#modeButton');
let mode = 'Dark';

const init = () => {
  const side = document.querySelector(`body`);
  const modeSlider = document.querySelector(`.mode--slider-dot`);
  const modeName = document.querySelector(`#modeName`);
  const cards = document.querySelectorAll(`.followers`);
  const boxes = document.querySelectorAll(`.box`);
  const boxTitles = document.querySelectorAll('.box--title');
  const slider = document.querySelector('.mode--slider');

  const cardsArr = Array.from(cards);
  const boxesArr = Array.from(boxes);
  const boxTitlesArr = Array.from(boxTitles);
  const all = cardsArr.concat(boxesArr);

  modeButton.addEventListener('click', () => {
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
    slider.classList.toggle(`mode--slider-light`);
    modeName.textContent = `${mode} mode`;
  });
};
init();
