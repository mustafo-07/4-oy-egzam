const btn2 = document.querySelector('.nav__menu__btn'),
    ul = document.querySelector('.nav__menu__ul');

btn2.addEventListener('click', function(e) {
    e.preventDefault()
    ul.classList.toggle('transform')
})

const myKay = '81656611e3be4d63b49ef78afb0ca59a'
const myKey2 = 'fbdda331b9e6496cb201481de2018e32'
const myKey3 = '31840fce8a1a4b9caf1cb57639af611b'



const btn = document.querySelector('.btn');
const btnPagination = document.querySelector('.buttons-pagination')
const pagination = document.querySelector('.pagination');
let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=81656611e3be4d63b49ef78afb0ca59a'
const input = document.querySelector(".searching__inp");
let page = 1;



async function myFetchData() {
    ``;

    try {
        const box = document.querySelector(".serching__cards__card");
        const inp = document.querySelector(".inp").value;

        if (inp) {
            url = `https://newsapi.org/v2/everything?q=${inp}&apiKey=c0ada28a045c4dd49b23c26addbc1261`;
        } else {
            url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c0ada28a045c4dd49b23c26addbc1261&page=${page}`;
        }

        let response = await fetch(url);
        let data = await response.json();
        let totalPages = data.totalResults > 10 ? 10 : data.totalResults;
        box.innerHTML = '';

        if (data.articles.length === 0) {
            const notFound = document.createElement('div');
            notFound.textContent = 'sorriy backend don`t give info'
            box.appendChild(notFound);
        } else {
            data.articles.slice(0, 15).map((sourse) => {
                const div = document.createElement('div');
                div.classList.add('serch__item');
                const img = document.createElement('img');
                const div2 = document.createElement('div');
                div2.classList.add("serching__cards__card__text");
                const span = document.createElement('span');
                const h2 = document.createElement('h2');
                const p = document.createElement('p');

                if (img.src == null) {
                    img.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fautopapa.ge%2Fru%2Fusd%2Fmercedes-benz%2Fcls-63-amg%2F755360&psig=AOvVaw1KRgqzvFfaXShIRUr4phYB&ust=1681226106844000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNioxrnNn_4CFQAAAAAdAAAAABAJ'
                } else {
                    img.src = sourse.urlToImage

                }
                img.alt = sourse.title;
                img.classList.add('serch__img')
                span.textContent = sourse.author;
                span.classList.add('serch__span')
                h2.textContent = sourse.title;
                h2.classList.add('serch__h2')
                p.textContent = sourse.description;

                div2.append(span);
                div2.append(h2);
                div2.append(p);
                div.append(img);
                div.append(div2);
                box.append(div);
            })
            pagination.innerHTML = '';
            if (totalPages > 1) {
                for (let i = 1; i <= totalPages; i++) {
                    const button = document.createElement('button');
                    button.innerText = i;

                    if (page === i) {
                        button.classList.add('button-hover')
                    }
                    button.addEventListener('click', () => {
                        page = i;
                        myFetchData();
                    })
                    button.classList.add('pagination-btn')
                    btnPagination.appendChild(button);
                }
            }
        }

    } catch (error) {
        console.error(error);
    }
}
myFetchData();
btn.addEventListener('click', (e) => {
    myFetchData();
});

// const url = 'https://newsapi.org/v2/everything?q=Apple&apiKey=31840fce8a1a4b9caf1cb57639af611b&description=Mac'
//     // const row = document.querySelector('.Popular-blogs__cards')
// const box = document.querySelector('.Popular-blogs__card')


// const search = document.querySelector('.inp');
// const btn = document.querySelector('.btn');
// const row = document.querySelector(".serching__cards")

// fetch('https://newsapi.org/v2/everything?q=Bitcoin&apiKey=fbdda331b9e6496cb201481de2018e32&page=1').then((response) => response.json()).then((data) => {
//     data.articles.map((sourse) => {
//         console.log(data.articles);

//         if (sourse.author !== null) {
//             const span = document.createElement('span')
//             const spanData = document.createElement('span')
//             spanData.textContent = sourse.publishedAt

//             span.textContent = sourse.author;

//             const content = document.createElement('h4')
//             const description = document.createElement('h5')
//             content.textContent = sourse.content
//             const img = document.createElement("img")
//             img.src = sourse.urlToImage

//             description.textContent = sourse.description;
//             const div = document.createElement("div");

//             div.appendChild(img)
//             div.appendChild(span)
//             div.appendChild(spanData)
//             div.appendChild(content)
//             div.appendChild(description)
//             row.appendChild(div)
//         }
//         // row.appendChild(box)


//     })

//     // console.log(data.articles);
// }).catch((error) => console.log(error));