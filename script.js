
const menu = document.querySelector('#menu'),
      navbar = document.querySelector('.navbar'),
      close = document.querySelectorAll('.close');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

close.forEach(e => {
    e.addEventListener('click', () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });
});
