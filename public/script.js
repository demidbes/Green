// Бургер меню
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header__burger-button')
    const nav = document.querySelector('.header__menu')

    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('hidden-desktop');
    })
})

// Копирование текста

document.querySelector('#copyButton').addEventListener('click', function() {
    const range = document.createRange()
    range.selectNode(document.querySelector('#copyText'))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
})
