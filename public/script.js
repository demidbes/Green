document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header__burger-button')
    const nav = document.querySelector('.header__menu')

    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('hidden-desktop');
    })
})