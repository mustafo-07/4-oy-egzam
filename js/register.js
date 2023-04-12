const btn2 = document.querySelector('.nav__menu__btn'),
    ul = document.querySelector('.nav__menu__ul');

btn2.addEventListener('click', function(e) {
    e.preventDefault()
    ul.classList.toggle('transform')
})
const form = document.querySelector('form'),
    inp1 = document.querySelector('.inp'),
    inp2 = document.querySelector('.lname__inp'),
    userName = document.querySelector(".usern__inp"),
    password = document.querySelector(".password__inp"),
    Cpassword = document.querySelector(".Cpassword__inp"),

    freshSpan1 = document.querySelector('.inp__span1'),
    freshSpan2 = document.querySelector('.inp__span2'),
    freshSpan3 = document.querySelector('.inp__span3'),
    freshSpan4 = document.querySelector('.inp__span4'),
    freshSpan5 = document.querySelector('.inp__span5');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (inp1.value === '') {
        inp1.classList.add('red__error');
    } else {
        inp1.classList.add('green__error');
    }
    if (inp2.value === '') {
        inp2.classList.add('red__error');
    } else {
        inp2.classList.add('green__error');
    }

    if (userName.value === '') {
        userName.classList.add('red__error');
    } else {
        userName.classList.add('green__error');
    }
    if (password.value === '') {
        password.classList.add('red__error');
    } else {
        password.classList.add('green__error');
    }


    if (password.value === Cpassword.value) {
        password.classList.add('green__error');
        // freshSpan5.textContent = 'Well Done'
    } else {
        password.classList.add('red__error');
        // freshSpan5.textContent = 'Пароль неправельный!!!'
    }
})