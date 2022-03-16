let btns = document.querySelectorAll('.btn');
let body = document.querySelector('body');

const changeBodyBG = e => {
    body.style.backgroundColor = e.target.textContent;
}

btns.forEach(btn => {
    addEventListener('click', changeBodyBG);
})