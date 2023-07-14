const burgerBox = document.querySelector('.hamburger-box');
const navMenuHeader = document.querySelector('.nav-menu-header');
const body = document.body;

console.log(body)
let isMenuOpen = false;

burgerBox.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!isMenuOpen) {
    burgerBox.classList.add('open');
    navMenuHeader.classList.add('open');
    isMenuOpen = true;
  } else {
    burgerBox.classList.remove('open');
    navMenuHeader.classList.remove('open');
    isMenuOpen = false;
  }
};