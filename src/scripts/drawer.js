/* eslint-disable linebreak-style */
const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const backdrop = document.querySelector('#backdrop');

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.style.width = '180px';
  backdrop.style.display = 'block';
  event.stopPropagation();
});

backdrop.addEventListener('click', (event) => {
  drawerElement.style.width = '0';
  backdrop.style.display = 'none';
  event.stopPropagation();
});
