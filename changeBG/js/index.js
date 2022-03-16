let btns = document.querySelectorAll('.btn');

const changeBodyBG = e => {
    console.log(e.target.textContent);
}

btns.forEach(btn => {
    addEventListener('click', changeBodyBG);
})