const navbar = document.querySelector('nav ul');
const menuBtn = document.querySelector('.menu_btn');
const menuBtnIcon = document.querySelector('.menu_btn img');

function updateMenuIcon() {
  if (menuBtnIcon.getAttribute('src') === 'images/icon-hamburger.svg') {
      menuBtnIcon.src = 'images/icon-close.svg';
  } else {
      menuBtnIcon.src = 'images/icon-hamburger.svg';
  }
}

menuBtn.addEventListener('click', () =>{
  updateMenuIcon();
  navbar.classList.toggle('show');
});