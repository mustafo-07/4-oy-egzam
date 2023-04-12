const form = document.querySelector('.form')
const

    block = document.querySelector('.box'),
    formButton = document.querySelector('.form__button');

let url = 'https://reqres.in/api/users';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('blog__form');
    const name = document.querySelector('.name__inp').value,
        info = document.querySelector('.info__inp').value,
        title = document.querySelector('.title__inp').value,
        img = document.querySelector('.img__inp').files[0];
    const read = new FileReader();
    read.readAsDataURL(img);
    read.onload = () => {
        const urlImg = read.result;
        // console.log(infoInp);
        const dataForm = { img: img, dataName: name, info: info, dataTitle: title }
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(dataForm)
        }).then((response) => response.json()).then((data) => {
            console.log(data);
            const box = document.createElement('div');

            box.innerHTML = `
        <div class="box row">
        <div class="box__item col-12">
        <img src="${img}" alt="..." class="box__img">
        <h2 class="box__h2">${name}</h2>
        </div>
        <h4 class="box__title">${title}</h4>
         <p class="box__des">${info}</p>
        </div>
        `;
            block.appendChild(box);
        })

    }
    form.classList.add('class')

})