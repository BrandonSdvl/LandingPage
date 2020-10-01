const tabs = document.getElementById('tabs')
const tabsItem = document.querySelectorAll('.tabs__item')
const articles = document.querySelectorAll('.article')

tabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tabs__item')) {
        tabsItem.forEach(item => { item.classList.remove('tabs__item--active') })
        e.target.classList.add('tabs__item--active')
        articles.forEach(item => item.classList.remove('article--show'))
        if (e.target.id === 'firstTab') {
            articles[0].classList.add('article--show')
        } else if (e.target.id === 'secondTab') {
            articles[1].classList.add('article--show')
        } else if (e.target.id === 'thirdTab') {
            articles[2].classList.add('article--show')
        }
    }
})