const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', function() {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
  });
});