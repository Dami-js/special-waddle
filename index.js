const h1 = document.querySelector('h1');
const body = document.querySelector('body');
const button = document.querySelector('button');
h1.innerText = 'Hello Javascript';

button.addEventListener('click', () => {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
})