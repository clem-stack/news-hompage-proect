const navItem = document.querySelector('.nav-item');
const openIcon = document.querySelector('.navbar-icon-open');
const closeIcon = document.querySelector('.navbar-icon-close');
const overLay = document.querySelector('.overlay');

openIcon.addEventListener('click', () =>{
  navItem.classList.add('active');
  openIcon.classList.add('active');
  closeIcon.classList.add('active');
  overLay.classList.add('active');
})

closeIcon.addEventListener('click', () =>{
  navItem.classList.remove('active');
  openIcon.classList.remove('active');
  closeIcon.classList.remove('active');
  overLay.classList.remove('active');
})