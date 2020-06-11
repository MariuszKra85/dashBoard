const modeButton = document.querySelector('#modeButton');
let mode = 'Dark';

const init = () => {
  console.log('odpala');

  const side = document.querySelector(`body`);
  const modeSlider = document.querySelector(`.mode--slider-dot`);
  const modeName = document.querySelector(`#modeName`);

  modeButton.addEventListener('click', () => {
    side.classList.toggle('light');
    side.classList.toggle('dark');

    side.classList.value.includes('dark') ? (mode = 'Dark') : (mode = 'Light');

    modeSlider.classList.toggle(`switch-mode`);
    modeName.textContent = `${mode} mode`;
  });
};
init();
