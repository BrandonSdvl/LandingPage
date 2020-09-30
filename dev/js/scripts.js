const hamburger = document.getElementById('hamburger')
const nav = document.getElementById('nav')
const logo = document.querySelector('.header__logo')

hamburger.addEventListener('click', (e) => {
    if (!nav.classList.contains('nav--show')) {
        e.target.src = 'images/icon-close.svg';
        nav.classList.add('nav--show')
        logo.src = 'images/logo-bookmark-white.svg'
    } else if (nav.classList.contains('nav--show')) {
        e.target.src = 'images/icon-hamburger.svg'
        nav.classList.remove('nav--show')
        logo.src = 'images/logo-bookmark.svg'
    }
})