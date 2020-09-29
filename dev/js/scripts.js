const hamburger = document.getElementById('hamburger')
const nav = document.getElementById('nav')

hamburger.addEventListener('click', (e) => {
    if (!nav.classList.contains('nav--show')) {
        e.target.src = 'images/icon-close.svg';
        nav.style.display = 'flex'
        nav.classList.add('nav--show')
        console.log('show add')
    } else if (nav.classList.contains('nav--show')) {
        e.target.src = 'images/icon-hamburger.svg'
        nav.style.display = 'none'
        nav.classList.remove('nav--show')
        console.log('show remove')
    }
})