const accordion = document.getElementById('accordion')

accordion.addEventListener('click', (e) => {
    if (e.target.classList.contains('accordion__header')) {
        e.target.nextElementSibling.classList.toggle('accordion__content--active')
        e.target.lastElementChild.classList.toggle('accordion__image--active')
    }
})