const menu = document.querySelector('.nav_container');
const burger = document.querySelector('.nav__button');

burger.addEventListener('click', toggleMenu);
menu.classList.contains('is-open');

function toggleMenu(){
  if(menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
    burger.classList.remove('is-open');
  } else {
    menu.classList.add('is-open');
    burger.classList.add('is-open');
  }
}

const menuLinks = document.querySelectorAll('.nav_link');

menuLinks.forEach((menuLink)=>{
  menuLink.addEventListener('click', toggleMenu);
});
