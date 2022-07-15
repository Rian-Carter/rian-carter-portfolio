// const hamburgerButton = document.getElementById('hamburger')
// const navList = document.getElementById('nav-list')

// function toggleButton() {
//     navList.classList.toggle('show')
// }

// hamburgerButton.addEventListener('click', toggleButton)

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});