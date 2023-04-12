const btn = document.querySelector('.nav__menu__btn'),
    ul = document.querySelector('.nav__menu__ul');

btn.addEventListener('click', function(e) {
    e.preventDefault()
    ul.classList.toggle('transform')
})

const myKay = '81656611e3be4d63b49ef78afb0ca59a'
const myKey2 = 'fbdda331b9e6496cb201481de2018e32'
const myKey3 = '31840fce8a1a4b9caf1cb57639af611b'

const url = 'https://newsapi.org/v2/everything?q=Apple&apiKey=31840fce8a1a4b9caf1cb57639af611b'
const row = document.querySelector('.Popular-blogs__cards')
const box = document.querySelector('.Popular-blogs__card')

fetch('https://newsapi.org/v2/everything?q=Apple&apiKey=81656611e3be4d63b49ef78afb0ca59a').then((response) => response.json()).then((data) => {
    data.articles.slice(0, 3).map((sourse) => {
        console.log(data.articles);

        if (sourse.author !== null) {
            const span = document.createElement('span')
            const spanData = document.createElement('span')
            spanData.textContent = sourse.publishedAt

            span.textContent = sourse.author;

            const content = document.createElement('h4')
            const description = document.createElement('h5')
            content.textContent = sourse.content
            const img = document.createElement("img")
            img.src = sourse.urlToImage

            description.textContent = sourse.description;
            const div = document.createElement("div");

            div.appendChild(img)
            div.appendChild(span)
            div.appendChild(spanData)
            div.appendChild(content)
            div.appendChild(description)
            box.appendChild(div)
        }
        row.appendChild(box)


    })

    // console.log(data.articles);
}).catch((error) => console.log(error));