const hamburger = document.getElementById('nav-hamburger');
const navLinksGroup = document.getElementById('nav-links-group');
const navClose = document.getElementById('nav-close');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  navLinksGroup.classList.add('open');
  nav.classList.add('open');
});

navClose.addEventListener('click', () => {
  navLinksGroup.classList.remove('open');
  nav.classList.remove('open');
});
