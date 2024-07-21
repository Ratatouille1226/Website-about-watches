//Меню
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


//Модальное окно
const openModal = document.querySelectorAll('.modal-open'),
      closeBtn = document.querySelector('.close-btn');

    openModal.forEach(function (btn) {
        btn.onclick = function () {
            let modal = btn.getAttribute('data-modal');

            document.getElementById(modal).style.display = 'flex';

            closeBtn.addEventListener('click', (e) => {
                document.getElementById(modal).style.display = 'none';
            });
        }
    });


//Анимации

AOS.init({
    delay: 400,
    duration: 1000
});

