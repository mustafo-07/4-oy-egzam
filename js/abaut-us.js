const btn2 = document.querySelector('.nav__menu__btn'),
    ul = document.querySelector('.nav__menu__ul');

btn2.addEventListener('click', function(e) {
    e.preventDefault()
    ul.classList.toggle('transform')
})