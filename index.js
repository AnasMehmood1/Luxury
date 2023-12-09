

const mobMenu = document.querySelector('.links');
const mobIcon = document.querySelector('.mob-menu i');

function toggleMobileMenu() {
  mobMenu.classList.toggle('show'); 
  mobIcon.classList.toggle('fa-times');
  mobIcon.classList.toggle('fa-bars');
}


mobIcon.addEventListener('click', toggleMobileMenu);