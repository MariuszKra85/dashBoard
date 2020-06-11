const modeButton = document.querySelector('#modeButton');
let mode = 'Dark';

const init = () => {
  console.log('odpala');

  const header = document.querySelector(`.header--container`);
  const modeSlider = document.querySelector(`.mode--slider-dot`);
  const modeName = document.querySelector(`#modeName`);

  modeButton.addEventListener('click', () => {
    header.classList.toggle('light');
    header.classList.toggle('dark');

    header.classList.value.includes('dark')
      ? (mode = 'Dark')
      : (mode = 'Light');

    modeSlider.classList.toggle(`switch-mode`);
    modeName.textContent = `${mode} mode`;
  });
};
init();
